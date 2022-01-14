---
title: How to get a website on the web
description: Learn how to deploy a HTML page using Github pages for free.
layout: ../../../layouts/MainLayout.astro
---

In this tutorial, we will learn how to deploy a HTML page using Github pages for free.

## Is this tutorial for you?

If you are learning web development, this guide is a good starter for your first ever website. You can use it as a reference for your own projects, and even deploy updates to the website.

## Requirements

You will need a computer, laptop or iPad with a web browser. Additionally, you will need a Github account. If you don't have one, check out the [Getting started with Github](../basics/setup-github) section.

## Steps

1. Create a new repository on Github by clicking the `+` button. Make sure to tick 'Add a README'. You can choose whether to make the repository public or private.

2. Your new repository should look like the below image.

![](/images/basic-website/new-repo.png)

3. While you're on the repository page, click the full stop button on your keyboard (<kbd>.</kbd>). This opens up Visual Studio Code in your browser without having to install it.

4. Create a new file called `index.html` using the `New File` button, <img src="/images/basic-website/new-file-icon.png" height="20px" width="20px" />.

> **Tip**: In all websites, the file called `index.html` is the main page of your website.

5. Paste the following HTML code into the file.

```html
<!DOCTYPE html>
<html>

<head>
    <title>Document</title>
</head>

<body>
    <h1>Hi!!</h1>
</body>

</html>
```

6. Now, click the Source Control icon on the left of VS Code (<img src="/images/basic-website/source-control-icon.png" height="20px" width="20px" />).

7. In the 'Message' field, type a short summary of your changes. For example, 'Added a new page'.
8. Press the 'Commit' button, which is a tick mark on the top right of the Source Control pane.

![](/images/basic-website/commit.gif)

9. Navigate back to your Github repository. (You can click the Github text on the bottom right of the window, then click 'Go to repository'.)

10. Navigate to repository settings, then the Pages tab. Under 'Source', change the branch from 'None' to 'main', or 'master' if that's there instead. Then click Save.

![](/images/basic-website/pages.gif)

### Congratulations 🎉
Your website should now be working at the URL shown to you. It'll look like this:

![](/images/basic-website/working-site.png)

## Updating your site

Updating your site is simple. Press `.` on the repository page, make your changes to any files, then commit your changes as demonstrated above.

To learn HTML and CSS, which you'll use to build your website further, check out our other guides or search for more resources on the internet.