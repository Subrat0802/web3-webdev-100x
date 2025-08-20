
PS D:\100xDev\devOps\week-34-1> kubectl describe pod nginx2
Name:             nginx2
Namespace:        default
Priority:         0
Service Account:  default
Node:             local-worker2/172.20.0.2
Start Time:       Wed, 20 Aug 2025 18:20:07 +0530
Labels:           run=nginx2
Annotations:      <none>
Status:           Running
IP:               10.244.1.2
IPs:
  IP:  10.244.1.2
Containers:
  nginx2:
    Container ID:   containerd://42d8b97f007ee881f8559eb0228f3d9b482ce2071887651650f796c92ee82e31
    Image:          nginx
    Image ID:       docker.io/library/nginx@sha256:33e0bbc7ca9ecf108140af6288c7c9d1ecc77548cbfd3952fd8466a75edefe57
    Port:           80/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Wed, 20 Aug 2025 18:20:53 +0530
    Ready:          True
    Restart Count:  0
    Environment:    <none>
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-tn9wx (ro)
Conditions:
  Type                        Status
  PodReadyToStartContainers   True
  Initialized                 True
  Ready                       True
  ContainersReady             True
  PodScheduled                True
Volumes:
  kube-api-access-tn9wx:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    Optional:                false
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              <none>
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  61s   default-scheduler  Successfully assigned default/nginx2 to local-worker2
  Normal  Pulling    60s   kubelet            Pulling image "nginx"
  Normal  Pulled     15s   kubelet            Successfully pulled image "nginx" in 44.673s (44.673s including waiting). Image size: 72324501 bytes.
  Normal  Created    15s   kubelet            Created container: nginx2
  Normal  Started    15s   kubelet            Started container nginx2
PS D:\100xDev\devOps\week-34-1> kubectl delete pod nginx2  
pod "nginx2" deleted
PS D:\100xDev\devOps\week-34-1> kubectl delete pod nginx 
pod "nginx" deleted
PS D:\100xDev\devOps\week-34-1> kubectl delete pod nginx3
pod "nginx3" deleted
PS D:\100xDev\devOps\week-34-1> kubectl get pods
No resources found in default namespace.
PS D:\100xDev\devOps\week-34-1> kubectl apply -f manifest.yml
pod/nginx created
PS D:\100xDev\devOps\week-34-1> kubectl get pods
NAME    READY   STATUS    RESTARTS   AGE
nginx   1/1     Running   0          7s
PS D:\100xDev\devOps\week-34-1> git add .
PS D:\100xDev\devOps\week-34-1> git commit -m "pod again"
[main 7356e01] pod again
 2 files changed, 16 insertions(+)
 create mode 100644 devOps/week-34-1/clusters.yml
 create mode 100644 devOps/week-34-1/manifest.yml
PS D:\100xDev\devOps\week-34-1> git push origin main
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 669 bytes | 111.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/Subrat0802/web3-webdev-100x
   04a2315..7356e01  main -> main
PS D:\100xDev\devOps\week-34-1>
 *  History restored 

PS D:\100xDev\devOps\week-34-1> kubectl apply -f manifest.yml
pod/nginx unchanged
PS D:\100xDev\devOps\week-34-1>
PS D:\100xDev\devOps\week-34-1> kubectl apply -f manifest.yml
pod/nginx unchanged
PS D:\100xDev\devOps\week-34-1> kubectl apply -f manifest.yml
PS D:\100xDev\devOps\week-34-1> kubectl apply -f manifest.yml
pod/nginx unchanged
PS D:\100xDev\devOps\week-34-1>
PS D:\100xDev\devOps\week-34-1> kubectl get pods
NAME    READY   STATUS    RESTARTS   AGE
nginx   1/1     Running   0          9m3s
PS D:\100xDev\devOps\week-34-1> kubectl delete pod nginx
pod "nginx" deleted
PS D:\100xDev\devOps\week-34-1> kubectl apply -f rs.yml
replicaset.apps/nginx-replicaset created
PS D:\100xDev\devOps\week-34-1> kubectl get replicaset 
NAME               DESIRED   CURRENT   READY   AGE
nginx-replicaset   3         3         3       21s
PS D:\100xDev\devOps\week-34-1> kubectl get pods
NAME                     READY   STATUS    RESTARTS   AGE
nginx-replicaset-7v9hh   1/1     Running   0          43s
nginx-replicaset-8l9rj   1/1     Running   0          43s
nginx-replicaset-r6zbc   1/1     Running   0          43s
PS D:\100xDev\devOps\week-34-1> kubectl apply -f rs.yml 
replicaset.apps/nginx-replicaset configured
PS D:\100xDev\devOps\week-34-1> kubectl get replicaset 
NAME               DESIRED   CURRENT   READY   AGE
nginx-replicaset   5         5         5       71s
PS D:\100xDev\devOps\week-34-1> kubectl get pods       
NAME                     READY   STATUS    RESTARTS   AGE
nginx-replicaset-7v9hh   1/1     Running   0          75s
nginx-replicaset-8l9rj   1/1     Running   0          75s
nginx-replicaset-k9bk7   1/1     Running   0          9s
nginx-replicaset-r6zbc   1/1     Running   0          75s
nginx-replicaset-vkng9   1/1     Running   0          9s
PS D:\100xDev\devOps\week-34-1> kubectl apply -f rs.yml
replicaset.apps/nginx-replicaset configured
PS D:\100xDev\devOps\week-34-1> kubectl get pods       
NAME                     READY   STATUS    RESTARTS   AGE
nginx-replicaset-8l9rj   1/1     Running   0          115s
nginx-replicaset-r6zbc   1/1     Running   0          115s
PS D:\100xDev\devOps\week-34-1> kubectl get replicaset 
NAME               DESIRED   CURRENT   READY   AGE
nginx-replicaset   2         2         2       2m
PS D:\100xDev\devOps\week-34-1> kubectl get pods      
NAME                     READY   STATUS    RESTARTS   AGE
nginx-replicaset-8l9rj   1/1     Running   0          3m19s
nginx-replicaset-r6zbc   1/1     Running   0          3m19s
PS D:\100xDev\devOps\week-34-1> kubectl get pods
NAME                     READY   STATUS    RESTARTS   AGE
nginx-replicaset-8l9rj   1/1     Running   0          20m
nginx-replicaset-r6zbc   1/1     Running   0          20m
PS D:\100xDev\devOps\week-34-1> kubectl delete rs nginx-replicaset
replicaset.apps "nginx-replicaset" deleted
PS D:\100xDev\devOps\week-34-1> kubectl get pods
No resources found in default namespace.
PS D:\100xDev\devOps\week-34-1> kubectl get replicaset
No resources found in default namespace.
PS D:\100xDev\devOps\week-34-1>  kubectl apply -f deployment.yml
deployment.apps/nginx-deployment created
PS D:\100xDev\devOps\week-34-1> kubectl get deployment
NAME               READY   UP-TO-DATE   AVAILABLE   AGE
nginx-deployment   3/3     3            3           24s
PS D:\100xDev\devOps\week-34-1> kubectl get pods
NAME                              READY   STATUS    RESTARTS   AGE
nginx-deployment-96b9d695-27gkf   1/1     Running   0          34s
nginx-deployment-96b9d695-mmp6x   1/1     Running   0          34s
nginx-deployment-96b9d695-v8n26   1/1     Running   0          34s
PS D:\100xDev\devOps\week-34-1> kubectl get rs  
NAME                        DESIRED   CURRENT   READY   AGE
nginx-deployment-96b9d695   3         3         3       79s
PS D:\100xDev\devOps\week-34-1> kubectl delete pod nginx-deployment-96b9d695-27gkf
pod "nginx-deployment-96b9d695-27gkf" deleted
PS D:\100xDev\devOps\week-34-1> kubectl get rs
NAME                        DESIRED   CURRENT   READY   AGE
nginx-deployment-96b9d695   3         3         3       2m15s
PS D:\100xDev\devOps\week-34-1> kubectl get pods
NAME                              READY   STATUS    RESTARTS   AGE
nginx-deployment-96b9d695-76d5r   1/1     Running   0          10s
nginx-deployment-96b9d695-mmp6x   1/1     Running   0          2m19s
nginx-deployment-96b9d695-v8n26   1/1     Running   0          2m19s
PS D:\100xDev\devOps\week-34-1> 

//add deployment 

PS D:\100xDev\devOps\week-34-1>  kubectl apply -f deployment.yml
deployment.apps/nginx-deployment configured

//change pods nginx to mongo
PS D:\100xDev\devOps\week-34-1>  kubectl apply -f deployment.yml
deployment.apps/nginx-deployment configured
PS D:\100xDev\devOps\week-34-1> 























PS D:\100xDev\devOps\week-34-1> kubectl get pods -w
NAME                              READY   STATUS    RESTARTS   AGE
nginx-deployment-96b9d695-76d5r   1/1     Running   0          3m22s
nginx-deployment-96b9d695-mmp6x   1/1     Running   0          5m31s
nginx-deployment-96b9d695-v8n26   1/1     Running   0          5m31s
nginx-deployment-7577b9f6dc-knr7d   0/1     Pending   0          0s
nginx-deployment-7577b9f6dc-knr7d   0/1     Pending   0          0s
nginx-deployment-7577b9f6dc-knr7d   0/1     ContainerCreating   0          1s
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> ^C
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> ^C
PS D:\100xDev\devOps\week-34-1> kubectl get pods -w
NAME                                READY   STATUS              RESTARTS   AGE
nginx-deployment-7577b9f6dc-knr7d   0/1     ContainerCreating   0          26s
nginx-deployment-96b9d695-76d5r     1/1     Running             0          3m53s
nginx-deployment-96b9d695-mmp6x     1/1     Running             0          6m2s
nginx-deployment-96b9d695-v8n26     1/1     Running             0          6m2s
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> ^C
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> kubectl get pods -w
NAME                                READY   STATUS              RESTARTS   AGE
nginx-deployment-7577b9f6dc-knr7d   0/1     ContainerCreating   0          41s
nginx-deployment-96b9d695-76d5r     1/1     Running             0          4m8s
nginx-deployment-96b9d695-mmp6x     1/1     Running             0          6m17s
nginx-deployment-96b9d695-v8n26     1/1     Running             0          6m17s
PS D:\100xDev\devOps\week-34-1> ^C
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> ^C
PS D:\100xDev\devOps\week-34-1> kubectl get pods -w
NAME                                READY   STATUS              RESTARTS   AGE
nginx-deployment-7577b9f6dc-knr7d   0/1     ContainerCreating   0          51s
nginx-deployment-96b9d695-76d5r     1/1     Running             0          4m18s
nginx-deployment-96b9d695-mmp6x     1/1     Running             0          6m27s
nginx-deployment-96b9d695-v8n26     1/1     Running             0          6m27s
nginx-deployment-7577b9f6dc-knr7d   0/1     Terminating         0          89s
nginx-deployment-58cfbcf485-nvrcd   0/1     Pending             0          1s
nginx-deployment-58cfbcf485-nvrcd   0/1     Pending             0          1s
nginx-deployment-58cfbcf485-nvrcd   0/1     ContainerCreating   0          1s
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> ^C
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> kubectl get pods -w
NAME                                READY   STATUS              RESTARTS   AGE
nginx-deployment-58cfbcf485-nvrcd   0/1     ContainerCreating   0          7s
nginx-deployment-7577b9f6dc-knr7d   0/1     Terminating         0          96s
nginx-deployment-96b9d695-76d5r     1/1     Running             0          5m3s
nginx-deployment-96b9d695-mmp6x     1/1     Running             0          7m12s
nginx-deployment-96b9d695-v8n26     1/1     Running             0          7m12s
PS D:\100xDev\devOps\week-34-1> ^C
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> ^C
PS D:\100xDev\devOps\week-34-1> ^C
PS D:\100xDev\devOps\week-34-1> 
PS D:\100xDev\devOps\week-34-1> kubectl get pods -w
NAME                                READY   STATUS              RESTARTS   AGE
nginx-deployment-58cfbcf485-nvrcd   0/1     ContainerCreating   0          21s
nginx-deployment-7577b9f6dc-knr7d   0/1     Terminating         0          110s
nginx-deployment-96b9d695-76d5r     1/1     Running             0          5m17s
nginx-deployment-96b9d695-mmp6x     1/1     Running             0          7m26s
nginx-deployment-96b9d695-v8n26     1/1     Running             0          7m26s
