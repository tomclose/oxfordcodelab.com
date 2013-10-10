## About the development set-up

This site uses bower to manage dependencies (such as bootstrap!) and grunt for site-related tasks. By using grunt to compile the bootstrap less code, we can make use of less variables to customise the css.

Grunt will use the files in the `app` folder to build a version of the site into the `dist` folder. We then want to push these files up to the `gh-pages` branch of the repository. In order to do this, we will maintain a completely separate git repository in the `dist` folder (which is git ignored from the main repo).

## Setting up the development environment

In order to make modifications to the site you must first do the following:

1. Clone the repository.

        $ git clone git@github.com:tomclose/oxfordcodelab.com.git

2. Install the node package manager, bower and grunt (if not already on your system):

        $ brew install npm
        $ npm install -g bower
        $ npm install -g grunt-cli

    (The `-g` is to install the packages globally).
3. In the oxfordcodelab.com folder, install the development dependencies

        $ npm install

4. Clone the gh-pages branch into the `dist` folder:

        $ git clone -b gh-pages dist

## Building the site

The files for the site are found in the `app` directory. To build the site use the grunt command:

    $ grunt

This will build the site and set up a watcher to rebuild everything when a change is made.

## Deploying the site

To deploy the site use the rake task:

    $ rake deploy
    


