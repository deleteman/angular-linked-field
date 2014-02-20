# Angular Linked Field directive

This is a very simple directive aimed to simplify the task of linking two fields and having the content of the first determine the content of the second one.

## Installation

_Using npm_:

```
$ npm install angular-linked-field
```
_Manual installation_:

Include ```angular-linked-field.js``` into your project, simple!

##Using it

The directive provided is ```linked-field```, it'll also require you to add the following parameters:

+ link-event: The event that'll trigger the method call. This is any jQuery supported event name.
+ linked-with: The ID of the field that'll be updated when the event is triggered.
+ link-method: The method to call when the event is triggered. This method must be available at the scope level.

###Writing the link-method function

The function to execute everytime the event is triggered will have the following properties:

+ The parameter received will be the value of the field that triggered the event.
+  ```this``` inside the function will reference the linked field (the destination field).


##Example



```html
        <textarea id="text" linked-field linked-with="shuffled_text" link-event="keyup" link-method="filterFunction" placeholder="Enter any text..."></textarea>
      <!-- -->
        <textarea id="shuffled_text" disabled></textarea>
```
For a full example, check out the sample.html file provided in this repo.

# Contact me

If you have questions, or just want to send your love/hate, drop me an e-mail at: deleteman@gmail.com

#License

The MIT License (MIT)

Copyright (c) 2013 Fernando Doglio

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
