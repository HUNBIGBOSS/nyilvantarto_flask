# nyilvantarto_flask
school assignment, no guarantees, check it out for instant disappointment

# Telepítés:
Python3 környezet:
````
sudo apt install python3; sudo apt install python3-pip
````
Virtualenv környezet:
````
sudo pip install virtualenv
````
nodejs, bower telepítése:
````
sudo apt-get remove --purge nodejs
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt update
sudo apt install nodejs
npm install --global bower
````
# Használata
Clone-ozzuk ezt a repot:
````
git clone https://github.com/HUNBIGBOSS/nyilvantarto_flask.git
````
Készítsünk virtualenv-et:
````
virtualenv -p python3 ~/virtualenv/nyilvantaro_flask
````
Aktiváljuk a virtualenv-et:
````
source ~/virtualenv/nyilvantarto_flask/bin/activate
````
Telepítsük a python csomagokat:
````
pip install -r requirements.txt
````
A clone-ozott nyilvantarto_flask mappán belül telepítsük a bower csomagot
````
bower install
````
# Futtatás
A nyilvantarto_flask mappán belül futtassuk az appot:
````
python app.py
````
