terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.9.0"
    }
  }

  backend "s3" {
    bucket         = "kafa-register-page-tfstate"
    key            = "terraform/IAM/terraform.tfstate"
    region         = "ap-northeast-2"
    encrypt        = true
    dynamodb_table = "kafa-register-page-tfstate-lock"
  }
}

module "infra" {
  source = "./modules"
}
