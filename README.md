# angular4-rollup-vs2015-dotnetcore 

## Prerequisites
```
Install Visual Studio 2015 with External web tools.
Install TypeScript 2.x.x for Visual Studio 2015 (https://www.microsoft.com/en-us/download/details.aspx?id=48593)
Install git (https://git-scm.com/download/win), node.js (with npm).

Run cmd, path must contain:

C:\Program Files\Git\cmd
C:\Program Files\nodejs\
C:\Users\<username>\AppData\Roaming\npm;

Check versions:

node -v
v6.10.1
npm -v
3.10.10

Go to Tools –> Options –> Projects and Solutions –> External Web Tools.
move $(PATH) on top
```

## Install
```
git clone https://github.com/mslyman/angular4-rollup-vs2015-dotnetcore.git

Run MS Visual Studio 2015 as admin, open .sln

Wait for packages downloaded
```

## Running development server
```
Debug project in MS Visual Studio 2015
```

## Building production
```
Deploy project in MS Visual Studio 2015
```

## Source
- [ ] https://angular.io/guide/aot-compiler

## Troubleshooting
- [ ] check https://blogs.msdn.microsoft.com/webdev/2015/03/19/customize-external-web-tools-in-visual-studio-2015/
- [ ] check version of bootstrap.js itself and version in the bower.json. If versions don'd match:
https://stackoverflow.com/questions/37584520/bootstrap-3-3-6-jquery-2-2-4-version-exception/38460014#38460014
 ```
Install Git for Windows
Delete %USERPROFILE%\AppData\Local\bower
Restart Visual Studio
Delete wwwroot/lib and Restore bower packages
```