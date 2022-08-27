resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

data "archive_file" "send_mail" {
  output_path = "../../send_mail.zip"
  source_dir = "../../src/send_mail"
  type        = "zip"
}
resource "aws_lambda_function" "send_mail" {
  filename      = "../../send_mail.zip"
  function_name = "send_mail"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "index.handler"
  runtime       = "nodejs16.x"
  environment {
    variables = {
      OUTLOOK_PASSWORD = var.outlook_password
      OUTLOOK_EMAIL = var.outlook_email
    }
  }
  source_code_hash = data.archive_file.send_mail.output_base64sha256
}

resource "aws_lambda_permission" "allow_cloudwatch" {
  statement_id  = "AllowExecutionFromCloudWatch"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.send_mail.function_name
  principal     = "events.amazonaws.com"
  source_arn = aws_cloudwatch_event_rule.mongodb_atlas.arn
}
