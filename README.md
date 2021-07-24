# 👨‍💻code-challenges
This app allows you to view and run my code solutions to code challenges for leetcode, project euler, and code.golf.

<p align="center">⚠ Please do not look at the code if you do not want to spoil the puzzles. ⚠</p>

This was built so that I can visually see tests run and fail based on given sets of test cases rather than relying on the console or the one provided by these code challenge sites.

# Writing in your own solutions.

When writing a solution, I add the function name and `num` to the `data.js` file.

`num` - Referrs to the problem number. If there isn't one (like in code.golf), just make it unique within the site.

`name` - Title of the challenge

`site` - The site that the challenge is on.

`method` - The function that solves the problem.

`url` - The url to the problem.

The file name corresponds to the problem number and method name.

In the JS file, you also define the test cases by using the method name and add `Test`.

The test cases are in arrays two elements [`arguments`, `expected`].

## 🏃‍ Run this code

Install basic dependencies
```
npm i
```
Start up a static server and open it in the browser
```
npm start
```

## 🛠️ Tools & Resources used

* Bootstrap 4.5 (CSS only)

## 👤 Author: Lewis Nakao
I am a software engineer in Hawaii. Find more stuff I made [here](https://lewdev.github.io).

If you like to support me in building these apps in open source:

* [❤️ Sponsor Me](https://github.com/sponsors/lewdev)
* [💸 Send money via Paypal](https://paypal.me/lewisnakao)
