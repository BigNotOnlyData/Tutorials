import socket
import json
from time import sleep

def server():
    message = []
    login = 'user2'
    password = 'fTUe3O99Rre'

    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind(('localhost', 9090))
    ready = True
    try:
        sock.listen(1)
        conn, addr = sock.accept()
        while True:
            data = conn.recv(1024)
            message.append(data.decode('utf8'))
            if len(message) > 1_000_000:
                conn.send(
                    json.dumps({
                        'result': 'Too many attempts to connect!'
                    }).encode('utf8'))
                break
            if not data:
                break

            try:
                login_ = json.loads(data.decode('utf8'))['login']

                password_ = json.loads(data.decode('utf8'))['password']
            except:
                conn.send(json.dumps({'result': 'Bad request!'}).encode('utf8'))
                continue

            if login_ == login:
                if password == password_:
                    conn.send(
                        json.dumps({
                            'result': 'Connection success!'
                        }).encode('utf8'))
                    break
                elif password.startswith(password_):
                    sleep(0.1)
                    conn.send(
                        json.dumps({
                            'result': 'Wrong password!'
                        }).encode('utf8'))
                else:
                    conn.send(
                        json.dumps({
                            'result': 'Wrong password!'
                        }).encode('utf8'))
            else:
                conn.send(json.dumps({'result': 'Wrong login!'}).encode('utf8'))
        conn.close()
    except:
        pass


server()        