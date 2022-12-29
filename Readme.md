---- create the jenkins server 
install docker on it

--- manage plugins > install docker pipeline plugin

install kubernetes-cd plugin downloaded already ...

--- manage jenkins > manage credentials

add dockerhub login creds with id same as provided as jenkinsfile

--- add kubernetes credentials as well
copy whole comgigfile from /root/.kube direvtory in creds

run the pipeline



*** IF Kubernetes stage is not working cz of kubernetes-cd plugin depreciated


** if jenkins would hve beeen installed on master of kube cluster

than , add aditional shell command instead of deploy stage of pipeline


sudo kubectl deploymentservice.yaml

** deployed **

