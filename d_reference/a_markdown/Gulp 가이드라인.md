# Gulp 가이드라인

gulp란? 웹이 발전하면서 복잡하고 다양한 파일들을 매번 생성하거나, <br/>

세팅하는것이 너무 번거로워지기때문에 이를 몇변의 명령을 통해 자동으로 생성, 처리하는 기능을 수행하는 도구

- 문서세팅
- 유효성검사 
- 파일의 압축화
- 파일의 간결화
- 파일의 난독화
- 변환(scss > css... )

[TOC]

## 설치하는 방법 

1. 컴퓨터 전역에 설치

   ```shell
   $ npm install --global gulp
   ```

   

2. 사용하고자 하는 디렉토리에 설치

   ```shell
   $ npm install --save-dev gulp
   ```

   

## Gulp를 사용하기위한 초기화 세팅

1. node 기반으로 사용자 초기화 및 세팅 (package.json)

   ```shell
   $ npm init -y
   ```

2. gulp 파일(gulpfile.js)을 생성하여, gulp를 불러오기

   ```shell
   $ touch gulpfile.js
   ```

3. gulpfile.js에 gulp를 불러와서 테스트하기

   ```javascript
   // gulp.js
   var gulp = require('gulp');
   gulp.task('test',function(){
       console.log('========================')
       console.log('gulp기능을 간단하게 테스트')
       console.log('========================')
   });
   ```

4. 위 파일을 생성후에 shell에서 실행명령어 수행

   ```shell
   $ gulp test
   ```

   - gulp 를 수행하기위한 'test'기능을 작성해서 호출한 경우 



## 자동화기능으로 기본디렉토리 생성명령어 만들기

1. directory를 생성하는 기능을 설치 (mk-dirs)
   - gulpfile.js에 mk-dir 호출하여 내용작성 (gulp를 호출한뒤에 작성)	

    ```shell
    $ npm install -D mk-dirs
    ```

2. 선택한 dir 및 파일을 삭제하는 기능을 설치 (del)

   ```shell
   $ npm install -D del
   ```

3. 파일을 생성하여 내용을 작성하는 기능설치(write)

   ```shell
   $ npm install -D write
   ```

   