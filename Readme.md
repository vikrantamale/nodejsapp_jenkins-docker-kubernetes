---- create the jenkins server (ubuntu)
```

curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
    /usr/share/keyrings/jenkins-keyring.asc > /dev/null
  
  echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null
    
    
sudo apt-get update
  sudo apt-get install fontconfig openjdk-11-jre
  sudo apt-get install jenkins
  
```  

install docker on it : (for ubuntu :)

https://docs.docker.com/engine/install/ubuntu/

--- manage plugins > install docker pipeline plugin

install kubernetes-cd plugin downloaded already in local system ...

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

