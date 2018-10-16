## Tutorial
#### nodejs
* https://velopert.com/node-js-tutorials
#### react
* https://velopert.com/reactjs-tutorials
## Resource
* [react icon](http://gorangajic.github.io/react-icons/index.html) : google material, font awesome,..
## 개발 및 배포환경
#### CentOS 환경
* node 설치 (node package manager인 npm 만 설치하면 자동)
```
$ sudo yum install npm
$ node -v
v0.10.48
$ npm -v
1.3.6
$ sudo npm install -g n
CERT_UNTRUSTED 오류 발생시
$sudo npm config set strict-ssl false
```
* node update
  * https://github.com/tj/n, https://velopert.com/1351
```
$ sudo npm cache clean -f
$ sudo n lts (lts : 최신 안정버전)
$ ls -al /usr/local/n/versions/node/
8.9.4
$ sudo mv /usr/bin/node /usr/bin/node_org
$ sudo ln -sf /usr/local/n/versions/node/8.9.4/bin/node /usr/bin/node
$ node -v
v8.9.4
```

* npm update
```
$ sudo npm cache clean -f
$ sudo npm install -g npm
$ sudo mv /usr/bin/npm /usr/bin/npm_org
$ sudo ln -sf /usr/local/n/versions/node/8.9.4/lib/node_modules/npm/bin/npm-cli.js /usr/bin/npm
$ npm -v
6.4.1
$ npm -list
--- (emtpy)
```
* deprecated
```
$ sudo /usr/bin/npm install node-gyp
$ sudo mv /usr/bin/node-gyp /usr/bin/node-gyp_org
$ sudo ln -sf /usr/local/n/versions/node/8.9.4/lib/node_modules/node-gyp/bin/node-gyp.js /usr/bin/node-gyp
```

* yarn install
```
$ sudo npm install --global yarn
$ sudo ln -sf /usr/local/n/versions/node/8.9.4/lib/node_modules/yarn/bin/yarn.js /usr/bin/yarn
$ sudo yarn global add create-react-app
$ sudo yarn global list
$ ls -al /usr/local/bin/
...
create-react-app -> ../share/.config/yarn/global/node_modules/create-react-app/index.js
...
$ git checkout http://... my-prj
$ cd my-prj
$ yarn install
```
