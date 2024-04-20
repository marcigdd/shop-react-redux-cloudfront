import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { DeploymentConstruct } from "./deployment-construct";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DeployWebAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new DeploymentConstruct(this, "deployment");
  }
}
