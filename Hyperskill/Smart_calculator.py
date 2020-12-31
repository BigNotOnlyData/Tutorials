from collections import deque

def normalisation(command, variable):
	numbers = list(command.strip())
	opera = ['*', '/']
	operands = ['*', '/', '+', '-']
	clear_val = []
	count_min = 0
	count_pl = 0
	figure = ''
	count_mul = 0
	count_div = 0

	# Transform word to numbers
	if word_to_number(numbers, variable):
		new_numbers = word_to_number(numbers, variable)
	else:
		return	
	
	for ind, val in enumerate(new_numbers):
		if val in operands:
			clear_val.append(figure)
			figure = ''
			if val == '-':
				count_min += 1
			elif val == '+':
				count_pl += 1			
			if val in opera:
				clear_val.append(val)				
		else:
			if count_min % 2:
				clear_val.append('-')
				count_min = 0
			elif count_pl != 0 or count_min > 0:
				clear_val.append('+')
				count_pl = 0
				count_min = 0	
			if val.isdigit():
				figure += val
			elif val == '(':
				clear_val.append(val)
			elif val == ')':
				if figure != '':
					clear_val.append(figure)
					figure = ''
					clear_val.append(val)
				else:
					clear_val.append(val)	
	clear_val.append(figure)
	clear_val = [clear_val[el] for el in range(len(clear_val)) if clear_val[el] != '']
	numbers = []
	for el in clear_val:
		if el.isdigit():
			numbers.append(el)
	if len(numbers)	< 2:
		return
	else:
		return clear_val	
	
# Rewrite to Postfix
def postfix(list_elements, variable):
	postfix = deque()
	stak = deque()
	operands = ['-', '+', '*', '/', '^']
	priority = {'-':1, '+':1, '*':2, '/':2, '^':3, '(':4, ')':4}

	for element in list_elements:
		if element.isdigit():
			postfix.append(element)				
		elif element in operands:
			if len(stak) == 0 or postfix[-1] == '(':
				stak.append(element)
			elif priority[element] > priority[stak[-1]]:
				stak.append(element)
			elif priority[element] <= priority[stak[-1]]:
				while True:
					if len(stak) == 0 or stak[-1] == '(' or priority[element] > priority[stak[-1]]:
						break
					else:	
						postfix.append(stak.pop())
				stak.append(element)
		elif element == '(':
			stak.append(element)
		elif element == ')':
			while True:
				if stak[-1] == '(':
					break
				else:	
					postfix.append(stak.pop())
			stak.pop()			
		if element == list_elements[-1]:
			while True:
				if len(stak) == 0:
					break
				else:	
					postfix.append(stak.pop())			 
	return postfix

def math_operation(stak_post):
	stak = deque(int(el) if el.isdigit() else el for el in stak_post) 
	result = deque()
	operands = ['-', '+', '*', '/', '^']
	while True:	
		if len(stak) == 0:
			break
		sign = stak.popleft()	
		if sign == '+':
			result.append((lambda x, y: y + x)(result.pop(), result.pop()))
		elif sign == '-':
			result.append((lambda x, y: y - x)(result.pop(), result.pop()))
		elif sign == '*':
			result.append((lambda x, y: y * x)(result.pop(), result.pop()))
		elif sign == '/':
			result.append((lambda x, y: y / x)(result.pop(), result.pop()))
		else:
			result.append(sign)
	return print(int(*result))

def record(command, variable):	
	var = [el.strip() for el in command.split('=')]
	if not var[0].isalpha():
		print('Invalid identifier')
	elif var[1].isdigit():
		variable[var[0]] = var[1]
	elif var[1] not in list(variable.keys()) and var[1].isalpha():
		print('Unknown variable')
	elif var[1] not in list(variable.keys()) and not var[1].isalpha():
		print('Invalid assignment')	
	else:
		val = variable[var[1]]
		variable[var[0]] = val

def word_to_number(list_var, variable):
	operands = ['*', '/', '(', ')', '+', '-']
	list_numb = []
	for el in list_var:
		if el.isalpha():
			if el in list(variable.keys()):
				list_numb.append(variable[el])
			else:
				print('Unknown variable')
				return
		elif el.isdigit() or el in operands:
			list_numb.append(el)		
	return list_numb					

def start():
	variable = {}		
	while True:
		command = input()	
		if not command:
			continue
		elif '**' in command or '//' in command:
			print('Invalid expression')	
		elif command in list(variable.keys()):
			print(variable[command])	
		elif command.count('=') > 1:
			print('Invalid assignment')
		elif command.count('=') == 1:		
			record(command, variable)					
		elif command == '/exit':
			print('Bye!')
			break
		elif command == '/help':
			print('The program calculates the sum of numbers')
		elif command.startswith('/'):
			print('Unknown command')
		elif command.endswith(('-', '+', '*', '/')):
		 	print('Invalid expression')
		elif command.count('(') != command.count(')'):
			print('Invalid expression') 					
		else:		
			if normalisation(command, variable):
				list_elements = normalisation(command, variable)
				postfix_stak = postfix(list_elements, variable)
				math_operation(postfix_stak)
			else:
				print(command)
				continue	
		
start()
