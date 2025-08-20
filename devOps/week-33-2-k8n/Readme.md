# create cluster.yml file
# kind create cluster --config clusters.yml --name local (add master and worker node) -- creates

# docker ps - see all nodes
# kubectl run nginx --image=nginx --port=80 -- add pod 
# kubectl get pods // kubectl get pods -w -- see running pods
# kubectl run mongo --image=mongo-pod --  run another pod
# kubectl get pods --  see both pods
# kubectl describe pod nginx --  see in which worker (node) running the pod
# kubectl delete mongo --  dlete pod
# kubectl get pod --  check deleted or not

# do not install pod using cmd line always create manifest.yml file 
 - manifest.yml create
 - add code 
 - now run - kubectl apply -f manifest.yml (to create pod using manifest.yml file)
 - kubectl get pods -- check running pod
 - kubectl delete pod nginx - delete pod

#