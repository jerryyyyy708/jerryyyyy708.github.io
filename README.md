# 網頁維護相關

### Javascripts
* 首頁的表格由 ```project_table.js``` 產生，從 database 取得資料並顯示內容(應該不太需要改動)。
* 側邊欄由 ```sidebar.js``` 產生，Projects 部分從 database 取得標題與連結，其他的則是直接將資料打在 array 中。未來預計改用 json 檔維護。

### 新增project到資料庫中
```
python table.py -t [title of project] -d [Description] -l [language] \
    -s [status(Ongoing/Complete)] -p [(name).html]
```
輸入指令後若 -p 的 html 檔不存在，會自動產生一個由 new_page.html 複製而來的預設頁面。<br> 並且經由 sidebar.js 與 project_table.js 顯示於側邊欄以及首頁。<br>
**設定-p時僅需打檔名，sidebar.js會自動處理檔案位置的問題。**

### 更改資料庫中的某個值
```
python temp.py
```
目前功能是寫死的 update_page_value_by_title，使用時需要直接改程式碼內容。

### 在資料庫中新增 column
```
python insert_column.py
```
目前功能也是寫死的，使用時須直接更改程式碼內容。

### CSS Styles
* ```first.css``` : Music Site 以及其子頁面使用的 style。未來希望將 Music Site 改用 HUGO 框架以 Blog 形式建立。
* ```try.css``` : 主要頁面使用的 style。以下為新增頁面時常用 element 之介紹。
    * .topcategory: 側邊欄大項分類，僅用於最上方(不須margin)。
    * .category: 側邊欄大項分類，於上側設有20px的間隔。
    * .title: 粗體字，主要用於標題。
    * h4: 為了頁面需求，下方會有一條黑色水平線，可用於分隔區塊的大標。
    * .Complete/Ongoing: 專案狀態。

### 待辦事項
* 優化更改資料庫 value 的程式(temp.)。
* 使用 .json 檔維護靜態資料。
* 寫一個用來幫資料庫新增屬性的程式，或把功能加在 ```table.py```。
* 在 table 中新增 visible 屬性以決定是否顯示於 sidebar 跟首頁。

