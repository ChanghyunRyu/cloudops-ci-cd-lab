terraform {
  backend "s3" {
    bucket = "cloudops-tfstate-bucket"              # ← 실제 존재하는 S3 버킷 이름으로 바꾸세요
    key    = "lab2/terraform.tfstate"     # ← tfstate가 저장될 경로
    region = "ap-northeast-2"
  }
}

provider "aws" {
  region = "ap-northeast-2"
}

resource "aws_instance" "jenkins_test" {
  ami           = "ami-0c9c942bd7bf113a2"  # Amazon Linux 2023, 서울 리전용
  instance_type = "t2.micro"

  tags = {
    Name = "jenkins-pipeline-test"
  }
}
