# frankii-web
The website interface for "Frankii"

## About Frankii
##### *A tool for you to communicate frankly* 
"Frankii" is a project aimed at increasing the efficiency of digital text-based communication with your teammates in Japanese. 
 
When communicating in Japanese through text messages, it is sometimes time-costly for one to find and pick the right Keigo, fix grammar mistakes, 
and pretty format the question for the other party to understand it clearly etc. 
Sometimes these actions take away our time, preventing us from focusing on solving the actual issues at hand. 
 "Frankii" wishes to alleviate this by abstracting away the stress of formatting and perfecting our text messages manually.
 
 In Frankii, you select the category of question you want to ask your teammate, type in the core content of your question in a few text fields,
 and frankii will generate a nicely formatted text you can paste and send. 
 For now, Frankii's target user group is engineers that send technical questions to their teammates during everyday work.    
     
 Frankii's Live Website: https://awsdojo2020cac.github.io/frankii-web/ <br /> 
 Frankii's Slack App: In development, working model exists. Contact us for more info. 

## PR 
「Frankii」は気楽に質問の出来る環境を提供し、昨今のリモートワークでの日々の業務上の質問における丁寧で分かりやすい質問文を作成する手間や、質問されることによって日々のタスクの段取りに悪影響を及ぼす問題を解消できるようになりました。

テキストでの質問に時間がかかってしまう経験はありませんか？質問する時に、素早くかつ明確に意識を伝えることは重要ですが、どうしても言葉使いに気を取られてしまいます。特に先輩、上司に対して質問することは、若手社員などは言葉にかなり悩むことがあります。

そこで「Frankii」は、質問の文章を深く考えなくとも、相互の間に入り、質問文を適切なフォーマットで生成する機能を提供します。そのため、質問者は質問文の作成で悩むことはなくなり、質問される側は、質問者の文章力に左右されず、直感的に質問を理解することができます。
## AWS Architecture Diagram 
![Alt text](./aws-architecture-diagram.png?raw=true "AWS Architecture Diagram ")
This repository is the code hosted on the S3 bucket.

## For Collaborators
### Summary 
The website GETs categories of questions and input templates from API gateway -> Lambda -> DynamoDB.
When one clicks on the "質問文生成" (generate text) button, the inputted data will call a POST API which also calls API gateway -> Lambda
to return a nice and pretty question.   
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Build and deploy 
Currently automatic build and deployments trigger on any pushes (github actions) 

## Todos
* Continue to develop backend according to Frankii's OpenAPI specification @jonkenobi
* Write infrastructure in Terraform @jonkenobi
* Add automated CI/CD @jonkenobi
* Add search function 
* Security 

## Notes
Proper pull requesting and branch separations are not yet implemented in this project because only one person is coding 
this repository currently without reviews. 
