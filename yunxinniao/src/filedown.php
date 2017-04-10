<?php
	/*
	 * 文件下载处理
	 */

	// 文件名
	$filename = "yunxinniao.zip";

	if ($_GET["filename"]) {
		$filename = $_GET["filename"];
	}

	// 文件路径
	$filepath = "./".$filename;
	

	// 得到要下载的图片文件的路径
	$fp = fopen($filepath,"r");

	// 得到文件的大小
	$filesize = filesize($filepath);

	// 下载文件必须的header设置，即设置HTTP响应报文
	header("Content-type:application/octet-stream");
	header("Accept-Ranges:bytes");
	header("Accept-Length:$filesize");
	header("Content-Disposition:attachment;filename=".$filename);

	//设置缓冲区大小
	$buffer = 1024;  
	$filecount = 0;

	// 每次读取1024比特，进行传输。直至全部传输完成
	while(!feof($fp) && ($filesize - $filecount>0)){
		$filedata = fread($fp,$buffer);
		$filecount += $buffer;
		echo $filedata;   
	}

	// 关闭文件
	fclose($fp);
?>