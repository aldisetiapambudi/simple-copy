# SimpleCopy 
## Script Sederhana Untuk Melakukan Copy dengan berbagai elemen Html

[English](#eng) | 
[Bahasa Indonesia](#id)

## [ID]
### Cara Install
1. Download dari repository github [disini]('https://github.com/aldisetiapambudi/simple-copy')
atau : https://github.com/aldisetiapambudi/simple-copy

2. Salin folder `simpleCopy` yang ada pada folder `min` kedalam directory project anda
> Jika anda ingin mudah untuk melakukan modifikasi gunakan file yang terdapat pada folder `src`

3. Hubungkan script `simpleCopy` dengan project anda
Contoh : 
``` html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SimpleCopy</title>
    <link rel="stylesheet" href="./simpleCopy/css/tooltips.min.css">
</head>
<body>
    <script src="./simpleCopy/js/simpleCopy.min.js"></script>
</body>
</html>
```  

### Cara Penggunaan
 Anda dapat menggunakan degan mudah hanya dengan menambahkan `onClick="copyContent('targetId')"`
 
 contoh  : 
``` html
<!-- elemen yang akan dicopy -->
<label for="" id="targerId">Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
<!-- tombol untuk melakukan copy -->
<button onClick="copyContent('targerId')">Copy</button>
```
> Pada script diatas ketika pengguna melakukan klik tombol yang terdapat fungsi copyContent, maka akan mengcopy yang terdapat pada targetId

##### Tooltip
Secara default simpleCopy akan memunculkan tooltips pada  tengah layar dengan pesan yang menandakan text berhasil atau gagal di salin

###### Menonaktifkan Tooltip
Anda bisa menonaktifkan tooltip dengan menambahkan parameter `false` setelah parameter id target
``` html
<button onClick="copyContent('targerId', false)">Copy</button>
```

###### Custom Pesan Tooltip
Anda bisa melakukan custom pesan yang digunakan pada tooltip dengan mengirimkan parameter ke 2 di function `copyContent` sebagai pesan berhasil dan parameter ke 3 sebagai pesan gagal
sebagai contoh : 
``` html
 <button onClick="copyContent('targerId', true, 'Pesan Sukses', 'Pesan gagal')">Copy</button>
```
> Catatan : Jika melakukan custom pesan maka wajib menambahkan kondisi true pada parameter seperti contoh diatas

##### Penggunaan Alternatif simpleCopy
Anda juga dapat menambahkan attribute `data-copy` kedalam elemen html dimana attribute tersebut nantinya yang akan diambil untuk dicopy
``` html
   <small data-copy="ini-data-yang-dicopy" id="IdElemenDataCopy"></small>
``` 
##### Penggunaan Lainnya
SimpleCopy ini dapat juga digunakan untuk melakukan copy berbagai elemen html seperti `label` `textarea` `input` dan elemen lainnya, anda hanya perlu menambahkan `ID` pada elemen yang akan dicopy lalu memangil `ID` elemen pada fungsi `copyContent('targetId')`

Contoh penggunaan pada elemen lain 
###### Date
``` HTML
<input type="date" id="dateCopy">
<button onClick="copyContent('dateCopy', true, 'Tanggal berhasail disalin ', 'Tanggal gagal disalin')">Copy</button>
```
###### Input
``` HTML
<input type="text" id="textCopyExample">
<button onClick="copyContent('textCopyExample', true, 'Teks berhasail disalin ', 'Teks gagal disalin')">Copy</button>
```
###### textarea
``` HTML
<textarea type="text" id="textAreaCopyExample">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quo!</textarea>  
<button onClick="copyContent('textAreaCopyExample', true, 'Teks area berhasail disalin ', 'Teks area gagal disalin')">Copy</button>
```
###### Label
``` HTML
<label for="" id="targerId">Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
<button onClick="copyContent('targerId')">Copy</button>
```

> Anda juga bisa mengunakan attribute lain sebagai triger onClick 
``` HTML
<i class="fas fa-copy hover:cursor-pointer" onClick="copyContent('tragetId)"></i>
```
 *) Script diatas hanya contoh


### Catatan pengambilan nilai / konten yang di salin 
| No | Elemen | Pengambilan Nilai Dari |
| --- | --- | --- |
|1 | Input | value |
|2 | Date | value |
|3 | Textarea | value / isi textarea |
|4 | Label | Elemen teks yang ditampilkan|
|...|...|...|
> **Catatan :**
> 
>  1. Elemen Html yang memiliki value seperti input dan sejenisnya maka konten yang di copy adalah apa yang ada di dalam value, sedangkan elemen seperti label, paragraph dan sejenisnya maka yang akan dicopy adalah contentn dari elemen itu sendiri
> 2. Anda juga bisa menambahkan attribute `data-copy` sebagai alternatif. 



## [ENG]
### How To Install
1. Download from the GitHub repository [here](https://github.com/aldisetiapambudi/simple-copy) or use this link: https://github.com/aldisetiapambudi/simple-copy

2. Copy the `simpleCopy` folder from the `min` folder into your project directory.
> If you want to make modifications easily, use the files located in the `src` folder.

3. Connect the `simpleCopy` script to your project.
Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SimpleCopy</title>
    <link rel="stylesheet" href="./simpleCopy/css/tooltips.min.css">
</head>
<body>
    <script src="./simpleCopy/js/simpleCopy.min.js"></script>
</body>
</html>
```

### How to use
You can easily use it by adding `onClick="copyContent('targetId')"`.

Example:
```html
<!-- Element to be copied -->
<label for="" id="targetId">Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
<!-- Button to trigger the copy -->
<button onClick="copyContent('targetId')">Copy</button>
```
> In the above script, when the user clicks the button with the `copyContent` function, it will copy the content of the element with the targetId.

##### Tooltip
By default, simpleCopy will display tooltips in the center of the screen with messages indicating whether the text was successfully copied or not.

###### Disabling Tooltip
You can disable the tooltip by adding the `false` parameter after the target id parameter.
```html
<button onClick="copyContent('targetId', false)">Copy</button>
```

###### Custom Tooltip Messages
You can customize the messages used in the tooltip by sending the second parameter to the `copyContent` function as a success message and the third parameter as a failure message.
For example:
```html
<button onClick="copyContent('targetId', true, 'Success Message', 'Failure Message')">Copy</button>
```
> Note: If you customize the messages, you must add a `true` condition as shown in the example above.

##### Alternative Usage of simpleCopy
You can also add the `data-copy` attribute to HTML elements, which will be used for copying.
```html
<small data-copy="this-is-the-data-to-copy" id="ElementIdToCopyFrom"></small>
```

##### Other Usages
SimpleCopy can also be used to copy various HTML elements such as `label`, `textarea`, `input`, and others. You just need to add an `ID` to the element you want to copy and then call the `copyContent('targetId')` function with that ID.

Examples of using other elements:
###### Date
```html
<input type="date" id="dateCopy">
<button onClick="copyContent('dateCopy', true, 'Date successfully copied', 'Date copy failed')">Copy</button>
```
###### Input
```html
<input type="text" id="textCopyExample">
<button onClick="copyContent('textCopyExample', true, 'Text successfully copied', 'Text copy failed')">Copy</button>
```
###### Textarea
```html
<textarea type="text" id="textAreaCopyExample">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quo!</textarea>  
<button onClick="copyContent('textAreaCopyExample', true, 'Textarea successfully copied', 'Textarea copy failed')">Copy</button>
```
###### Label
```html
<label for="" id="targetId">Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
<button onClick="copyContent('targetId')">Copy</button>
```

> You can also use other attributes as `onClick` triggers.
```html
<i class="fas fa-copy hover:cursor-pointer" onClick="copyContent('targetId')"></i>
```
 *) The above script is just an example.

### Note on Content Retrieval for Copying
| No | Element | Content Retrieval From |
| --- | --- | --- |
|1 | Input | value |
|2 | Date | value |
|3 | Textarea | value / textarea content |
|4 | Label | Displayed text of the element itself |
|...|...|...|
> **Note:**
> 
>  1. HTML elements with a value attribute, such as input and similar elements, will copy the content within the value attribute. For elements like labels, paragraphs, and the like, it will copy the content of the element itself.
> 2. You can also add the `data-copy` attribute as an alternative.


### Additional Information
SimpleCopy is a versatile tool that can be used to simplify the process of copying various types of content in your web applications. Whether you need to copy text, dates, or other HTML elements, SimpleCopy provides an easy way to achieve this functionality with minimal code.

##### Customization
You can customize SimpleCopy to fit your specific needs. By modifying the tooltip messages or using the `data-copy` attribute, you have control over the user experience. This flexibility allows you to tailor SimpleCopy to the look and feel of your website or application.

##### Cross-Browser Compatibility
SimpleCopy is designed to work across various web browsers, ensuring a consistent experience for your users. Whether they're using Chrome, Firefox, Safari, or other popular browsers, SimpleCopy aims to provide reliable functionality.

##### Usage Examples
Here are some practical examples of how SimpleCopy can be utilized in different scenarios:

###### Copying User-generated Content
You can enable users to easily copy content they generate or input into your web application, such as text they've written or dates they've selected.

###### Shareable Links
Allow users to copy shareable links with a single click, simplifying the process of sharing content with others.

###### Quick Reference
For educational websites or applications, you can use SimpleCopy to help users copy code snippets, references, or other essential information quickly.

### Conclusion
SimpleCopy is a lightweight and user-friendly tool that streamlines the copy functionality for various HTML elements in web applications. By following the installation instructions and customization options, you can enhance the user experience and make it easier for users to interact with and share content from your site.

If you have any questions or encounter any issues while using SimpleCopy, you can refer to the GitHub repository for documentation and support. Enjoy the convenience of simplified copying with SimpleCopy in your web projects!
