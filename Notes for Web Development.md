# (1) HTML File Structure

##### Html tags are all done in tree structure, as in example below: 

```javascript
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Lesson</title> 
</head>
<body>
    <h1>Lesson 1</h1>
</body>
</html>
```

##### For images: 

```javascript
<input
  id="image"
  type="image"
  width="100"
  height="30"
  alt="Login"
  src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" />
```

- alt is a placeholder if cannot get the right image. 
- type determines what will be displayed for input. 

##### For audio and video: 

```javascript
 <audio
        controls
        src="/media/cc0-audio/t-rex-roar.mp3">
            <a href="/media/cc0-audio/t-rex-roar.mp3">
                Download audio
            </a>
    </audio>
```

##### Video:

```javascript
<video controls width="800">

    <source src="/videos/video1.mp4"
            type="video/mp4">

    <source src="/videos/video2.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>

```

# (2) VSCode Shortcuts 

- Automatically load html format: ! + Enter. 

# Javascript Functions 

- Remember to add note for splice. 

### Jquery: 

#### Animate Function:

- The jQuery animate() method performs custom animation using element's style properties. The animate() method changes existing style properties to the specified properties with motion.

- ```javascript
  $('#myDiv').animate({
                          height: '200px',
                          width: '200px'
                      },
                      5000);
  
  <div id="myDiv" class="redDiv">
  </div>
  ```

- The 5000 refers to the number the milliseconds to run animation. 500 is faster than 5000. 

#### Element selector: 

- Below functions will apply changes to element listed in bracket. Below example is for selector by name. 

- ```javascript
  $('p').append('This is paragraph.'); // appends text to all p elements 
  
  $('div').append('This is div.); // appends text to all div elements 
  
  <div>
      <p></p>
      <p></p>
  </div>
  
  <p></p>
  
  <div></div>
  ```

- ![Screen Shot 2023-06-17 at 2.07.40 PM](https://raw.githubusercontent.com/MLi-dev/kof_game/self_practice/Notes%20for%20Web%20Development/Screen%20Shot%202023-06-16%20at%203.52.04%20PM.jpg)



##### Summary: 

- $('xx') : Select by name xx
- $('#xx'): Select by the id xx
- $("[xx]"): Select by the attribute xx. 
  - Attribute means for example, <img src="https://image.jpg"></img> 
  - Src is the attribute xx. 
- $(".xx"): Select by the class xx. 

#### Traversal: 

- The jQuery **.each()** method iterates over each specified element (speified using $ selector) and executes callback function for each element. 

  - ```javascript
    $('p').each(function (index) {
            alert('index' + index + ', text: ' + $(this).text());
        });
    
    <div>
        <p>This is First paragraph.</p>
    </div>
    <div id="myDiv">
        <p>
            This is second paragraph.
        </p>
        <div id="inrDiv">
            <p>This is third paragraph.</p>
        </div>
        <div>
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>
        </div>
    </div>
    <div>
        <p>This is fourth paragraph.</p>
    </div>
    ```

  - Above example first finds elements with the tag 'p' then alerts. In this case, will print out all 4 paragraphs. 

- The Jquery **.children()** method gets the child element of each specified element (specified using $ selector) and executes callback function.

  - ```javascript
    $('#myDiv').children().each(function (index) {
            alert('Index: ' + index + ', html: ' + $(this).html());
        });
    
    <div>
        <p>This is First paragraph.</p>
    </div>
    <div id="myDiv">
        <p>
            This is second paragraph.
        </p>
        <div id="inrDiv">
            <p>This is third paragraph.</p>
        </div>
        <div>
            <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>
        </div>
    </div>
    <div>
        <p>This is fourth paragraph.</p>
    </div>
    ```

  - Above example will find the elements with the id "myDiv" and then prints out any element that is its child. 

    - Will print out second paragraph, third paragraph and the <ul>. 

#### Jquery Find Expression: 

- Specify a selector to get the reference of an element(s) whose child elements you want to find and then call find() method with selector expression to get all the matching child elements. You can iterate child elements using each method.

- ```javascript
  $('#myDiv').find('p').each(function(index){
              alert('index' + index + ', text: ' + $(this).text());
      });
  
  <div>
      <p>This is First paragraph.</p>
  </div>
  <div id="myDiv">
      <p>
          This is second paragraph.
      </p>
      <div id="inrDiv">
          <p>This is third paragraph.</p>
      </div>
      <div>
          <ul>
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
          </ul>
      </div>
  </div>
  <div>
      <p>This is fourth paragraph.</p>
  </div>
  ```

- First with $ selector, find occurrences of the id myDiv. Then, print out any elements with name p inside of myDiv. 

- This example above will print out second paragraph and third paragraph (surrounded by <p>). 

### Tip: Anything that can be put in Selector can be modified by CSS. 

- JQuery Selector Patterns for reference: https://www.tutorialsteacher.com/jquery/jquery-selectors



# (3) CSS Tips and Tricks 

##### Applying Style by Tags: 

```javascript
div {
    width: 200px;
    height: 200px;
    background-color: gray;
} 
```

Above style will affect all div tags. 

##### Applying Style by ID: 

```javascript
#rect-1 {
    width: 200px;
    height: 200px;
    background-color: gray;
}
```

E.g <div id="rect-1"></div>

##### Applying Style by Class: 

```javascript
.rectangle {
    width: 200px;
    height: 200px;
    background-color: gray;
}
```

If in html, <div class="rectangle"> 

##### Applying Style by Select: 

1) Link: 

```javascript
a:link {
    color: forestgreen;
    text-decoration-color: hotpink;
}

a:visited {
    color: red;
    text-decoration-color: red;
}




```

- :link applies css to links as is originally. 

- :visited applies the css inside it to any link already clicked on. 

- ![Screen Shot 2023-06-16 at 3.52.04 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 3.52.04 PM.jpg)

- Example below is for **hovering** over a button. 

- ```javascript
  
  .joinBtn:hover {
      background-color: bisque;
  }
  
  ```

- 

- ![Screen Shot 2023-06-16 at 3.55.11 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 3.55.11 PM.jpg)

- Example below is for **active** (when button clicked)

- ```javascript
  
  .joinBtn:active {
      background-image: linear-gradient(135deg, green 40%, #fc894d);
  
  }
  ```

- 

- ![Screen Shot 2023-06-16 at 4.01.42 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 4.01.42 PM.jpg)

- Example below is for focus (left is for Full Name bar, right is for select drop-down menu)

- ```javascript
  input:focus {
      background-color: yellow;
  }
  
  select:focus {
      background-color: green;
  }
  ```

- Focus adds highlight and allows action (type, select from drop-down menu 

- ![Screen Shot 2023-06-16 at 4.06.37 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 4.06.37 PM.jpg)

- Example below is for nth-child

- ```javascript
  li:nth-child(3n) {
      border: 2px solid orange;
      margin-bottom: 1px;
  }
  
  li:nth-child(even) {
      background-color: lightyellow;
  }
  ```

- Nth-child will apply the css contained within its brackets to the corresponding indeces of list. 

- ![Screen Shot 2023-06-16 at 4.11.42 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 4.11.42 PM.jpg)

- This bottom example is for target

- ```javascript
  p:target::before {
    font: 70% sans-serif;
    content: "►";
    color: limegreen;
    margin-right: 0.25em;
  }
  
  /* Style italic elements within the target element */
  p:target i {
    color: red;
  }
  ```

- 

- ![Screen Shot 2023-06-16 at 4.23.19 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 4.23.19 PM.jpg)

##### Combinators: 

- **Descendant combinator**: Selects nodes that are descendants of first element. 

  ![Screen Shot 2023-06-16 at 4.54.19 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 4.54.19 PM.jpg)

- **Selector list**: The `,` selector is a grouping method that selects all the matching nodes.

  **Syntax:** `A, B`

  **Example:** `div, span` will match both the <span> and <div> elements.

- **Adjacent (Same level) sibling combinator**: The `+` combinator matches the second element only if it *immediately* follows the first element.

  **Syntax:** `A + B`

  **Example:** `h2 + p` will match the first <p> element that *immediately* follows an [h2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) element.

  ```javascript
  <h2></h2> <p></p>
  ```

- **Child combinator**: The `>` combinator selects nodes that are direct children of the first element.

  **Syntax:** `A > B` 

  **Example:** `ul > li` will match all <li> elements nested directly inside of <ul> element.

  ```javascript
  <ul><li></li></ul>
  ```

- **General sibling combinator**: The ~ combinator matches the second element but this time second element doesn't immediately follow first element. 

​		**Syntax:** `A ~ B`

```javascript
<h2></h2> <div></div> <p></p>, <h2>~<p>
```

- **Specifically alter style in one class**: Tag.class lets know under what context the style may be altered despite it being used for more than one class. 

- ```javascript
  <span class = "style1"></span>
  <div class = "style1"></div> 
  ```

  - if want to specifically alter for span, do span.style1. 

- **Universal selector**: 

  - Selects all elements. Optionally, it may be restricted to a specific namespace or to all namespaces.

    **Syntax:** `*` `ns|*` `*|*`

    **Example:** `*` will match all the elements of the document.

- **Attribute selector:** 

  - ```html
    img[alt="picName"] {width:100px;}
    ```

    would affect (sets width to 100) 

    ```html
    <img src="picName.png" alt="picName" />
    
    ```

  - If did img[alt] {width: 100px; } would set anything surrounding by img tag with alt to 100px width. 

- **::first-letter**: 

  - Styles the first letter of string of selector. 
  - ![Screen Shot 2023-06-16 at 5.06.12 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 5.06.12 PM.jpg)

- ::first-line: 

  - Styles first line of string of selector. 
  - ![Screen Shot 2023-06-16 at 5.10.31 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 5.10.31 PM.jpg)

- ::selection: 

  - Will apply style to anything selected by user. 
  - ![Screen Shot 2023-06-16 at 5.14.06 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 5.14.06 PM.jpg)

- ::after: 

  - Applies style at end of selected element. 
  - ![Screen Shot 2023-06-16 at 5.17.01 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 5.17.01 PM.jpg)

- ::before: 

  - Applies style at the beginning of selected element. 
  - ![Screen Shot 2023-06-16 at 5.18.03 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 5.18.03 PM.jpg)

- !Important: 

  - Overrides all other styles. 
  - With Important: 
    - ![Screen Shot 2023-06-16 at 5.26.46 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 5.26.46 PM.jpg)

  - Without important: 
    - ![Screen Shot 2023-06-16 at 5.26.33 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-16 at 5.26.33 PM.jpg)

#### Color: 

- ```javascript
  div {
    width: 100px;
    height: 50px;
    margin: 1rem;
  }
  
  div.comma-separated {
    background-color: rgb(255, 0, 0, 0.5);
  }
  
  ```

- The fourth one is for transparency. Can use either rgb or Rgba

#### Text-align: 

- Four options: Start (align to left), end(align right), center(align center), justify (Check screenshot) 

- ```javascript
  text-align: start;
  
  ```

- ![Screen Shot 2023-06-17 at 4.25.42 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.25.42 PM.jpg)

##### Line-height: 

- Adjust height between lines. 

- ```javascript
  /* Keyword value */
  line-height: normal;
  
  /* Unitless values: use this number multiplied
  by the element's font size */
  line-height: 3.5;
  
  /* <length> values */
  line-height: 3em;
  
  /* <percentage> values */
  line-height: 34%;
  ```

##### Letter-spacing: 

- Adjust space between each letter in text (can do negative spacing too). 

##### Text-indent: 

- Indents text
- ![Screen Shot 2023-06-17 at 4.31.41 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.31.41 PM.jpg)

##### Text-decoration: 

- ![Screen Shot 2023-06-17 at 4.30.47 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.30.47 PM.jpg)

##### Text-shadow: 

- ![Screen Shot 2023-06-17 at 4.32.54 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.32.54 PM.jpg)

#### Font CSS: 

##### Font-size: 

- Size of text. 
- ![Screen Shot 2023-06-17 at 4.34.17 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.34.17 PM.jpg)

##### Font-style: 

- Can add deg at end for oblique style (angle degree). 
- ![Screen Shot 2023-06-17 at 4.36.39 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.36.39 PM.jpg)

##### Font-weight: 

- Thickness of text. 
- ![Screen Shot 2023-06-17 at 4.38.10 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.38.10 PM.jpg)

##### Font-family: 

- ![Screen Shot 2023-06-17 at 4.40.14 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.40.14 PM.jpg)

#### Background: 

##### Background-color: 

- ![Screen Shot 2023-06-17 at 4.42.48 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.42.48 PM.jpg)

##### Background-image: 

- ```javascript
  background-image: url("../../media/examples/lizard.png"),                  		url("../../media/examples/star.png");
  ```

- ![Screen Shot 2023-06-17 at 4.46.57 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.46.57 PM.jpg)

- In above example, first url covers other image. 

- ```javascript
  background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),                  url("../../media/examples/lizard.png");
  ```

- ![Screen Shot 2023-06-17 at 4.49.01 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.49.01 PM.jpg)

- First parameter creates a background with gradient effect combining blue and yellow. 

##### Background-size: 

- Adjust the size of the element's background image. 
- ![Screen Shot 2023-06-17 at 4.53.59 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.53.59 PM.jpg)

##### Background-repeat: 

- Determines how many times the background image will repeat. 
- ![Screen Shot 2023-06-17 at 4.58.33 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.58.33 PM.jpg)

##### Background-position: 

- Where will background image be placed. 
- ![Screen Shot 2023-06-17 at 4.59.49 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 4.59.49 PM.jpg)



##### Background-attachment: 

- The **`background-attachment`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether a background image's position is fixed within the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport), or scrolls with its containing block.
- ![Screen Shot 2023-06-17 at 5.04.42 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.04.42 PM.jpg)

#### Border: 

##### Border-style: 

- Sets line style along all four sides of element border. If only wrote two, means one covers top/bottom, other covers the sides of border. 
- ![Screen Shot 2023-06-17 at 5.14.01 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.14.01 PM.jpg)

##### Border-width: 

- ![Screen Shot 2023-06-17 at 5.16.14 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.16.14 PM.jpg)

##### Border-color: 

- ![Screen Shot 2023-06-17 at 5.17.04 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.17.04 PM.jpg)

##### Border-radius: 

- Rounds out sides of border. 

- ![Screen Shot 2023-06-17 at 5.17.48 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.17.48 PM.jpg)

##### Border-collapse: 

- In table, sets whether cells have shared or separate borders. 
- ![Screen Shot 2023-06-17 at 5.25.19 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.25.19 PM.jpg)

##### Box-sizing: 

- Content-box works outside out box, border-box creates border within box. 
- ![Screen Shot 2023-06-17 at 5.29.43 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.29.43 PM.jpg)

##### Display: 

- ![Screen Shot 2023-06-17 at 5.49.19 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.49.19 PM.jpg)

##### White-space:

- Pre: Sequences of white-space are preserved. Lines are only broken at newline characters in source and at <br> elements. 
- ![Screen Shot 2023-06-17 at 5.52.12 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.52.12 PM.jpg)



##### Text-overflow: 

- If text is too long, use clip or ellipsis to cut off. The **`text-overflow`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('`…`'), or display a custom string.
- ![Screen Shot 2023-06-17 at 5.55.47 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.55.47 PM.jpg)

##### Overflow: 

- Sets desired behavior whenever content doesn't fit in border box. 
- ![Screen Shot 2023-06-17 at 5.57.24 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-17 at 5.57.24 PM.jpg)

#### Margin: 

- Outside border, follows similar top right bottom left pattern with size set. 
- ![Screen Shot 2023-06-18 at 1.29.01 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 1.29.01 PM.jpg)
  - Brown area around the yellow rectangle is the margin. 
  - Can set size with px (length) or percentage. 

##### Margin-top, Margin-right, Margin-bottom, Margin-left: 

-  Can set each separately. 

#### Padding: 

- Inside the border, has a top right bottom left pattern. 
- ![Screen Shot 2023-06-18 at 1.31.15 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 1.31.15 PM.jpg)
  - Green area inside around the text is the padding. 
  - Can set size with px (length) or percentage. 

##### Padding-top, Padding-right, Padding-bottom, Padding-left: 

- Can set each separately. 

#### Position: 

- Sets how an element will be positioned in a document. 

##### Static: 

- Element will be positioned according to the normal flow of the document. Any top, right, bottom, left and z-index properties will have no effect. 

##### Relative: 

- Element is positioned according to normal flow of document, but taking into consideration its own values of top, right, bottom and left. 

##### **Absolute**: 

- The element with position:absolute set will be removed from the normal document flow and no space is created for element in the page layout. It is positioned relative to its closest positioned ancestor, if any; otherwise will be placed relative to the initial containing block. Its final position is determined by the values of top, right, bottom, left. 

- Parent also must contain position:absolute for style to take effect. 

##### Fixed: 

- The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to the initial [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) established by the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/Viewport). 

##### Sticky: 

- The element with position:sticky set will be positioned according to the normal flow of the document, and then offset relative to its nearest scrolling ancestor and containing-block. 

- If scroll down, sticky element stays in same position and follows.

![Screen Shot 2023-06-18 at 2.00.08 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.00.08 PM.jpg)

#### Float: 

- Float CSS property will place an element on the left or right side of its container. 

  ![Screen Shot 2023-06-18 at 2.03.35 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.03.35 PM.jpg)

#### Clear: 

- Sets whether an element mst be moved below floating elements that precede it. 

- ![Screen Shot 2023-06-18 at 2.13.51 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.13.51 PM.jpg)

#### Flex-direction: 

- Determines how flex items will be placed inside the flex container. 

##### Row 

- Puts items along same row. 

##### Row-reverse

- Reverses those items along same row. 

##### Column 

- Puts items along same column. 

##### Flex-direction 

- Reverses those items along same column. 

![Screen Shot 2023-06-18 at 2.19.41 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.19.41 PM.jpg)

#### Flex-wrap: 

- Flex-wrap sets whether flex items are forced onto one line or can wrap across multiple lines. 
  - ![Screen Shot 2023-06-18 at 2.22.53 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.22.53 PM.jpg)

#### Flex-flow: 

- Can include both flex-direction and flex-wrap. 
  - ![Screen Shot 2023-06-18 at 2.26.09 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.26.09 PM.jpg)

#### Justify-content: 

- Defines how space will distributed between and around content items along main axis. 

- ![Screen Shot 2023-06-18 at 2.28.44 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.28.44 PM.jpg)

##### Align-items: 

- Sets the align-self value on all direct children as a group. 
  - ![Screen Shot 2023-06-18 at 2.33.04 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.33.04 PM.jpg)

##### Align-content: 

- Sets distribution of space between and around content items around the axis. 
  - Think of space between lines. 
  - ![Screen Shot 2023-06-18 at 2.42.46 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.42.46 PM.jpg)

##### Flex Order: 

- Ordered by order number least to greatest.  
  - If reading a repeat order number, earlier order number goes ahead. 
- ![Screen Shot 2023-06-18 at 2.47.03 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.47.03 PM.jpg)

##### Flex-grow: 

- Determines how much space the flex item's container expands, then the other flex item containers will compress to fill out overall container. 
- ![Screen Shot 2023-06-18 at 2.55.42 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 2.55.42 PM.jpg)

##### Flex-shrink: 

- Determines how much the flex item's container will compress, then the other flex item containers will expand to fill out overall container. 
- ![Screen Shot 2023-06-18 at 3.07.48 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 3.07.48 PM.jpg)

##### Flex-basis: 

- Sets the initial main size of a flex item. Will either shrink or expnd the content box unless otherwise set with box-sizing. 
- ![Screen Shot 2023-06-18 at 3.13.45 PM](/Users/matthew/summer_dev/kof_game/Notes for Web Development/Screen Shot 2023-06-18 at 3.13.45 PM.jpg)

##### Flex: 

- Flex: flex-grow flex-shrink flex-basis.

- ```javascript
  auto: flex: 1 1 auto 
  ```

- Flex-grow = 1, Flex-shrink = 1, Flex-basis = auto. 

##### Media CSS: 

```javascript
@media(min-width: 768px) {
    .container {
        width: 960px;
        background-color: lightblue;
    }
}
```

- Minimum possible width of your browser will be 768px. >768px will apply light blue background-color. Otherwise, <768px won't apply. 

