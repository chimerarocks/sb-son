#1º Instalar o ambiente virtual para gerenciar as versões do python

    - se não possuir o pip instalar: https://pip.pypa.io/en/stable/installing/
    - sudo pip install virtualenvwrapper
    - /bin/bash /usr/local/bin/virtualenvwrapper.sh
    - source /usr/local/bin/virtualenvwrapper.sh
    - mkvirtualenv [env name]
    - workon [env name]

#2º Instalar o django
    - pip install django
#3º Criar projeto
    - django-admin startproject [name]
#4º Rodar projeto
    - python manage.py runserver
#5º Criar app
    - python manage.py startapp [name]

#Rotas
Dentro da pasta do projet em urls.py estão as rotas da aplicação que apontam pra [app].views.[method]
#Views
Dentro da pasta do app e arquivo views.
#Templates
Templates são html que podem ser retornados
#Database
python manage.py makemigrations
python manage.py migrate

#Atenção especial a administração automática no último commit