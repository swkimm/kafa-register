resource "aws_s3_bucket" "frontend" {
  bucket = var.s3_bucket

  tags = {
    Name = "register.kafa.one"
  }
}

resource "aws_s3_object" "frontend" {
  for_each = fileset("../dist", "**")

  bucket       = aws_s3_bucket.frontend.id
  key          = each.value
  source       = "../dist/${each.value}"
  content_type = lookup(jsondecode(file("${path.module}/mime.json")), regex("\\.[^.]+$", each.key), null)
  etag         = filemd5("../dist/${each.value}")
}

resource "aws_s3_bucket_website_configuration" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

data "aws_iam_policy_document" "cloudfront_s3" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.frontend.arn}/*"]

    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.main.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "frontend" {
  bucket = aws_s3_bucket.frontend.id
  policy = data.aws_iam_policy_document.cloudfront_s3.json
}
