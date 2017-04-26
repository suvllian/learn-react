<?php
header('Content-Type:application/json');
@session_start();
session_save_path(dirname(__FILE__).'/sess/');

class Image extends Handler 
{
	public function setSuccessor($nextService)
	{
		$this->successor = $nextService;
	}

	public function handleRequest($request)
	{
		// 数据库操作句柄
		$this->dataBaseHandle = $request->getDataBaseHandle();

		$this->FirstHandle = "getImage";
		$this->SecondHandle = "deleteImage";
		$this->ThirdHandle = "uploadImage";
		$this->FourthHandle = "getNumber";
		$this->FifthHandle = "login";
		$this->SixthHandle = "getSmallPicId";
		$this->SeventhHandle = "getPicSrc";

		
		if($request->getService() == $this->FirstHandle){	
			$this->getImage();
		}
		elseif ($request->getService() == $this->SecondHandle) {
			$this->deleteImage();
		}
		elseif ($request->getService() == $this->ThirdHandle) {
			$this->uploadImage();
		}
		elseif ($request->getService() == $this->FourthHandle) {
			$this->getNumber();
		}
		elseif ($request->getService() == $this->FifthHandle) {
			$this->login();
		}
		elseif ($request->getService() == $this->SixthHandle) {
			$this->getSmallPicId();
		}
		elseif ($request->getService() == $this->SeventhHandle) {
			$this->getPicSrc();
		}

		elseif($this->successor!=NULL){

			// 传递给下一个
			$this->successor->handleRequest($request);
		}
	}

	public function login(){	
		$name = $_POST["name"];
		$pass = $_POST["pass"];
		if (($name == "penghuan") && ($pass == "yunpeng0105")) {
			$_SESSION['yunxinniao'] = "admin";
			echo 1;
		}	
	}

	public function getImage(){
		$page = ($_GET["page"] - 1) * 12;
		$sql = "SELECT * FROM photo LIMIT $page, 12";
		$result = $this->dataBaseHandle->fetchAll($sql);
		echo json_encode($result);	
	}

	public function getPicSrc(){
		$id = $_GET["id"] - 0;
		$sql = "SELECT * FROM photo WHERE id = $id";
		$result = $this->dataBaseHandle->fetchOne($sql);
		echo json_encode($result);	
	}

	public function deleteImage(){
		$id = $_POST["id"] - 0;
		$sql = "DELETE FROM photo WHERE id = $id";
		$result = $this->dataBaseHandle->IDA($sql);

		if ($result) {
			echo 1;
		} else {
			echo 2;
		}
		
	}

	public function uploadImage(){
		$filename = $_POST["filename"];
		$id = $_POST["id"];
		$isSmall = $_POST["isSmall"];

		if (is_uploaded_file($_FILES['myfile']['tmp_name'])) {
			// 把文件转存到目录
			$uploaded = $_FILES['myfile']['tmp_name'];
			
			// 动态创建一个文件夹
			$userpath = "./../img/";
			// 判断文件夹是否存在
			if(!file_exists($userpath)){
				mkdir($userpath);
			}
			
			// 获取文件名及后缀
			$truename = $_FILES['myfile']['name'];
			$extension = substr($truename, strrpos($truename,"."));
			$nameWithExten = $filename.$extension;
			// 目的路径
			$moveto   = $userpath."/".$nameWithExten;

			if ($isSmall == 0) {
				$sql = "UPDATE photo SET src = '$nameWithExten' WHERE id = $id";
				$result = $this->dataBaseHandle->IDA($sql);
			} else {
				$sql = "UPDATE photopic SET src = '$nameWithExten' WHERE id = $id";
				$result = $this->dataBaseHandle->IDA($sql);
			}
			
			// 上传文件
			if(move_uploaded_file($uploaded, iconv("utf-8", "gb2312", $moveto))){
				echo $nameWithExten;
			}else{
				echo 0;
			}
		}else{
			echo -1;
		}
	}

	public function getNumber(){
		$sql = "SELECT * FROM photo ORDER BY id DESC LIMIT 1";
		$result = $this->dataBaseHandle->fetchOne($sql);
		$id = $result["id"];

		$newId = $id + 1;
		$sql = "INSERT INTO photo VALUES($newId, $newId)";
		$result = $this->dataBaseHandle->IDA($sql);
		echo $newId;
	}

	public function getSmallPicId(){
		$id = $_GET["id"] - 0;
		$sql = "SELECT * FROM photopic WHERE photoid = $id";
		$result = $this->dataBaseHandle->fetchAll($sql);
		echo json_encode($result);
	}
}