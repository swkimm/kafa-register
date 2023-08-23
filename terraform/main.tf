terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.9.0"
    }
  }

  backend "s3" {
    bucket         = "ht-official-page-tfstate"
    key            = "terraform/IAM/terraform.tfstate"
    region         = "ap-northeast-2"
    encrypt        = true
    dynamodb_table = "ht-official-page-tfstate-lock"
  }
}

module "infra" {
  source = "./modules"

  region    = var.region
  s3_bucket = var.s3_bucket
}
