const xlsx = require('node-xlsx')

const fs = require('fs');

//readdir为读取该文件夹下的文件

fs.readdir('../input', function (err, files) {

    files.forEach((file) => {

        let path = `${__dirname}/input/${file}`;
        let sheetList = xlsx.parse(path);
        console.log( sheetList.length);
        console.log( Object.keys(sheetList[0]).toString());


    });

    // //数据进行缓存
    // let buffer = xlsx.build(sheetList);
    // //将缓存的数据写入到相应的Excel文件下
    // fs.writeFile(path.replace(/input/, 'output').replace(/\./, '修改版.'), buffer, function (err) {

    //     if (err) {

    //         console.log(err);

    //         return;

    //     }

    // });

})