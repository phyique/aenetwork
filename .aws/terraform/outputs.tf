output "aws" {
  value = data.aws_caller_identity.current.account_id
}
