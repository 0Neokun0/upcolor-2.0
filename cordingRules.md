## 命名規約

<br>

> ファイル名は小文字スタートのつなぎ目大文字
```
filename => fileName
```

<br>

> リクエストの変数は省略する
```
request => req
response => res
error => err
```

<br>

> ユーザーID
```
userID => userId
```

<br>

> SQL文
>> Hogeはセレクトしたりアップデートするものをわかりやすく書く！
```js
const sqlSelectHoge = "SELECT column1, column2, column3 FROM table1"

const sqlInsertHoge = "INSERT INTO table1(column1, column2, column3) VALUES("value1", "value2", "value3")"

const sqlUpdataHoge = "UPDATE table1 SET column1 = "value1", column2 = "value2", column3 = "value3""

const sqlDeleteHoge = "DELETE FROM table1 WHERE column1 = "value1""
```

<br>
---

## コーディング規約

<br>

> 関数はコールバックで書く！

## ❌
```js
function hoge () {
    return fuga
}
```

## ⭕
```js
const hoge = () => {
    return fuga
}
```

> 開始タグと終了タグは改行する！

## ❌
```html
<div>hoge</div>
```

## ⭕
```html
<div>
    hoge
</div>
```

> 子要素間は改行を入れる！
>> `<Route />`は例外

## ❌
```html
<div>
    <div>
        hoge
    </div>
    <div>
        fuga
    </div>
    <div>
        <div>
            hogehoge
        </div>
    </div>
</div>
```

## ⭕
```html
<div>
    <div>
        hoge
    </div>

    <div>
        fuga
    </div>

    <div>
        <div>
            hogehoge
        </div>
    </div>
</div>
```

> 属性は一つずつ改行する！

## ❌
```html
<div id="hoge" name="fuga">
    hogehoge
</div>
```

<br>

## ⭕
```html
<div
    id="hoge"
    name="fuga"
>
    hogehoge
</div>
```

<br>

> リクエスト・レスポンスする際は配列で返すようにする！

## ❌
```js
res.json(hoge[0]["fuga"])
```

## ⭕
```js
res.json(hoge[0])
```

<br>

> リクエスト・レスポンスは変数に代入してから使用！

```js
const hoge = req.body["hoge"]

const fuga = res.data["fuga"]
```

<br>

> 配列の末尾には`,`！

```js
const hoge = [
    "fuga",
    "hogehoge",
]
```

<br>

> プレースホルダは変数に入れずにSQL関数に配列で書く!
>> 一つの場合でも配列で書く！

## ❌
```js
const sqlSelectHoge = "SELECT column1 FROM table1 WHERE column2 = ? AND column3 = ?"
const placeHolder = [hoge, fuga]

handleSelect(sqlSelectHoge, placeHolder)
```

## ⭕
```js
const sqlSelectHoge = "SELECT column1 FROM table1 WHERE column2 = ? AND column3 = ?"

handleSelect(sqlSelectHoge, [hoge, fuga])
```

<br>
---

## SQLルール

<br>

> カラムは指定するように！アスタリスク禁止！
```sql
SELECT column1, column2, column3 FROM table1

INSERT INTO table1(column1, column2, column3) VALUES("value1", "value2", "value3")

UPDATE table1 SET column1 = "value1", column2 = "value2", column3 = "value3"

DELETE FROM table1 WHERE column1 = "value1"
```