
# Create a new EventBridge Rule

locals {
  bus_name = "aws.partner/mongodb.com/stitch.trigger/63096e8b4a42f350761879b3"
}
resource "aws_cloudwatch_event_rule" "mongodb_atlas" {
  name           = "capture-mongodb-triggers"
  description    = "capture all database updates"
  event_bus_name = local.bus_name
  event_pattern = <<PATTERN
{
  "source": [{"prefix": ""}]
}
PATTERN
}

resource "aws_cloudwatch_event_target" "example" {
  arn  = aws_lambda_function.send_mail.arn
  event_bus_name = local.bus_name
  rule = aws_cloudwatch_event_rule.mongodb_atlas.name
}
