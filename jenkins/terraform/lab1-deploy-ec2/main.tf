terraform {
  backend "s3" {
    bucket = "cloudops-tfstate-bucket"
    key    = "lab1-deploy-ec2/terraform.tfstate"
    region = "ap-northeast-2"
  }
}

provider "aws" {
  region = "ap-northeast-2"
}

resource "aws_instance" "example" {
  ami           = "ami-0c9c942bd7bf113a2"  # Amazon Linux 2023 (서울)
  instance_type = "t2.micro"

  tags = {
    Name = "jenkins-action-test"
  }
}
