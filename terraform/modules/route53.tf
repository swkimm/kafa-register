provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}

resource "aws_route53_zone" "main" {
  name = "humantrust.one"
}

resource "aws_acm_certificate" "main" {
  domain_name       = "humantrust.one"
  validation_method = "DNS"
  provider          = aws.us-east-1
}

resource "aws_route53_record" "cert" {
  for_each = {
    for dvo in aws_acm_certificate.main.domain_validation_options : dvo.domain_name => {
      name    = dvo.resource_record_name
      zone_id = aws_route53_zone.main.zone_id
      type    = dvo.resource_record_type
      value   = dvo.resource_record_value
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.value]
  ttl             = 300
  type            = each.value.type
  zone_id         = each.value.zone_id
}

resource "aws_route53_record" "main" {
  name    = "humantrust.one"
  type    = "A"
  zone_id = aws_route53_zone.main.zone_id

  alias {
    name                   = aws_cloudfront_distribution.main.domain_name
    zone_id                = aws_cloudfront_distribution.main.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "humantrust-one-MX" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "humantrust.one"
  type    = "MX"
  records = ["1 SMTP.GOOGLE.COM"]
  ttl     = "300"
}

resource "aws_route53_record" "humantrust-one-NS" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "humantrust.one"
  type    = "NS"
  records = ["ns-1930.awsdns-49.co.uk.", "ns-90.awsdns-11.com.", "ns-1013.awsdns-62.net.", "ns-1380.awsdns-44.org."]
  ttl     = "172800"
}

resource "aws_route53_record" "humantrust-one-SOA" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "humantrust.one"
  type    = "SOA"
  records = ["ns-1930.awsdns-49.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"]
  ttl     = "900"
}

resource "aws_route53_record" "humantrust-one-TXT" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "humantrust.one"
  type    = "TXT"
  records = ["google-site-verification=CWAyJQ6Q6kvqRMDcMiPnBq6DpdYr_Z5Y-lYAikiBy9s"]
  ttl     = "300"
}

resource "aws_route53_record" "_537b401157a66d4838416663cf1f6e10-humantrust-one-CNAME" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "_537b401157a66d4838416663cf1f6e10.humantrust.one"
  type    = "CNAME"
  records = ["_f5a48f0dc45f6a6d8ef96b84bb9d1b58.zykwrxlgwv.acm-validations.aws."]
  ttl     = "300"
}

resource "aws_acm_certificate_validation" "main" {
  provider        = aws.us-east-1
  certificate_arn = aws_acm_certificate.main.arn
  validation_record_fqdns = [
    for record in aws_route53_record.cert : record.fqdn
  ]
}
