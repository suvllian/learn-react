<?php
header('Content-Type:application/json');

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

		switch ($request->getService()) {
			case "check" :
				$this->checkValue();
				break;
			case "login" :
				$this->login();
				break;
			case "register" :
				$this->userRegister();
				break;
			case "resume" :
				$this->fillResume();
				break;
			case "getStuInfo" :
				$this->getStudentInfo();
				break;
			case "company" :
				$this->companyRegister();
				break;
			default: 
				break;
		}
	}

	public function checkValue() {
		$table = addslashes($_GET["table"]);
		$column  = addslashes($_GET["column"]);
		$value  = addslashes($_GET["value"]);

		$sql = "SELECT id FROM $table WHERE $column = $value";
		$result = $this->dataBaseHandle->numRows($sql);
		echo json_encode($result);
	}

	public function login() {
		$username = addslashes($_POST["username"]);
		$pass  = addslashes($_POST["password"]);

		$sql = "SELECT password, id FROM user WHERE phone = '$username'";
		$result = $this->dataBaseHandle->fetchOne($sql);
		if ($pass == $result["password"]) {
			echo $result["id"];
		} else {
			echo json_encode($result);
		}
	}

	public function companyRegister(){		
		$username = addslashes($_POST["username"]);
		$password = addslashes($_POST["password"]);

		$sql = "";
		if (!empty($_POST["phone"])) {
			$phone = addslashes($_POST["phone"]);
			$sql = "INSERT INTO company(username, password, phone) VALUES('$username', '$password', '$phone')";
		} else {
			$email = addslashes($_POST["email"]);
			$sql = "INSERT INTO company(username, password, email, klass) VALUES('$username', '$password', '$email')";
		}

		$result = $this->dataBaseHandle->IDA($sql);

		$lastId = $this->getLast("company");
		echo json_encode($lastId);
	}

	public function userRegister(){		
		$username = addslashes($_POST["username"]);
		$password = addslashes($_POST["password"]);

		$sql = "";
		if (!empty($_POST["phone"])) {
			$phone = addslashes($_POST["phone"]);
			$sql = "INSERT INTO user(username, password, phone) VALUES('$username', '$password', '$phone')";
		} else {
			$email = addslashes($_POST["email"]);
			$sql = "INSERT INTO user(username, password, email) VALUES('$username', '$password', '$email')";
		}

		$result = $this->dataBaseHandle->IDA($sql);
		$lastId = $this->getLast("user");
		echo json_encode($lastId);
	}

	public function fillResume() {
		$step = $_POST["step"];

		if ($step == "one") {
			$this->fillResumeOne();
		} elseif ($step == "two") {
			$this->fillResumeTwo();
		} elseif ($step == "three") {
			$this->fillResumeThree();
		} else {
			$this->fillResumeFour();
		}
	}

	public function fillResumeOne() {
		$uId = addslashes($_POST["id"]);
		$name = addslashes($_POST["name"]);
		$highestDegree = addslashes($_POST["highestDegree"]);
		$year = addslashes($_POST["year"]);
		$phone = addslashes($_POST["phone"]);
		$email = addslashes($_POST["email"]);
		$city = addslashes($_POST["city"]);

		$sql = "INSERT INTO stu_info_1(name, highestDegree, workYears, phone, email, city, uId) VALUES('$name', '$highestDegree', '$year', '$phone', '$email', '$city', $uId)";
		$result = $this->dataBaseHandle->IDA($sql);
		echo $result;
	}

	public function fillResumeTwo() {
		$uId = addslashes($_POST["id"]);
		$school = addslashes($_POST["school"]);
		$major = addslashes($_POST["major"]);
		$degree = addslashes($_POST["degree"]);
		$graduate = addslashes($_POST["graduate"]);

		$sql = "INSERT INTO stu_info_2(school, major, degree, graduate, uId) VALUES('$school', '$major', '$degree', '$graduate', $uId)";
		$result = $this->dataBaseHandle->IDA($sql);
		echo $result;
	}

	public function fillResumeThree() {
		$uId = addslashes($_POST["id"]);
		$company = addslashes($_POST["company"]);
		$job = addslashes($_POST["job"]);
		$startTime = addslashes($_POST["startTime"]);
		$endTime = addslashes($_POST["endTime"]);

		$sql = "INSERT INTO stu_info_3(company, job, startTime, endTime, uId) VALUES('$company', '$job', '$startTime', '$endTime', $uId)";
		$result = $this->dataBaseHandle->IDA($sql);
		echo $result;
	}

	public function fillResumeFour() {
		$uId = addslashes($_POST["id"]);
		$words = addslashes($_POST["words"]);

		$sql = "INSERT INTO stu_info_4(word, uId) VALUES('$words', $uId)";
		$result = $this->dataBaseHandle->IDA($sql);
		echo $result;
	}

	public function getStudentInfo() {
		$id = addslashes($_GET["id"]);

		$sql1 = "SELECT * FROM stu_info_1, stu_info_4 WHERE stu_info_1.uId = $id AND stu_info_4.uId = $id";
		$result1 = $this->dataBaseHandle->fetchAll($sql1);

		$sqlSchool = "SELECT * FROM stu_info_2 WHERE uId = $id";
		$resultSchool = $this->dataBaseHandle->fetchAll($sqlSchool);

		$sqlWork = "SELECT * FROM stu_info_3 WHERE uId = $id";
		$resultWork = $this->dataBaseHandle->fetchAll($sqlWork);

		$result = array(
            "work" => $resultWork,
            "school" => $resultSchool,
            "baseinfo" => $result1
		);

		echo json_encode($result);
	}

	public function getLast($table) {
		$sql = "SELECT * FROM $table ORDER BY id DESC LIMIT 1";
		$result = $this->dataBaseHandle->fetchOne($sql);
		$id = $result["id"];

		return $id;
	}
}