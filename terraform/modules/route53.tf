provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}

data "aws_route53_zone" "main" {
  name = "kafa.one."
}

resource "aws_acm_certificate" "main" {
  domain_name               = "kafa.one"
  subject_alternative_names = ["*.kafa.one"]
  validation_method         = "DNS"
  provider                  = aws.us-east-1
}

resource "aws_route53_record" "cert" {
  for_each = {
    for dvo in aws_acm_certificate.main.domain_validation_options : dvo.domain_name => {
      name    = dvo.resource_record_name
      zone_id = data.aws_route53_zone.main.zone_id
      type    = dvo.resource_record_type
      value   = dvo.resource_record_value
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.value]
  ttl             = 60
  type            = each.value.type
  zone_id         = each.value.zone_id
}

resource "aws_route53_record" "main" {
  name    = "register.kafa.one"
  type    = "A"
  zone_id = data.aws_route53_zone.main.zone_id

  alias {
    name                   = aws_cloudfront_distribution.main.domain_name
    zone_id                = aws_cloudfront_distribution.main.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_acm_certificate_validation" "main" {
  provider        = aws.us-east-1
  certificate_arn = aws_acm_certificate.main.arn
  validation_record_fqdns = [
    for record in aws_route53_record.cert : record.fqdn
  ]
}
