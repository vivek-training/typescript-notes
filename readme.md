Essential system setup:

1.  Visual Studio Code
2.  Nodejs runtime (LTS is preferred)
3.  Angular CLI

How to install Angular CLI?
after you have installed nodejs, ensure these commands are working

node --version

npm --version

If not, please check your environment variables. Chances are your shell cannot locate the executables.

Once you are done, run this command

npm i -g @angular/cli

Mac/Linux users use:

sudo npm i -g @angular/cli

i is the shortcut for install and -g for global (intended for tools like typescript, angular, etc).

After this, install typescript by this command

npm i -g typescript // sudo for mac/Linux

For creating a typescript project, create a directory and change to it. Run this command for using npm for this project:

npm init --yes

This creates the package.json file.

Then:

tsc --init

This creates tsconfig.json which is used for compiler configuration for typescript compiler. Go to this file and change target to "es2017" for advanced features.

To transpile the ts files to js, use tsc inside the directory. This creates a js file for every ts file. Run the .js file with node (node x.js). Don't forget to transpile after you make a change to ts file.

---

To create an app in angular, use:

ng new app-name // names are separated by dashes. no digit immediately after dash.

At this point, do not select router and use default CSS for style.
