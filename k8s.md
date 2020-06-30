# K8S commands

## Managing cluster

### Cluster info

```sh
kubectl cluster-info
```

### Nodes

```sh
kubectl get nodes
```

## Managing deployment

### Create deployment

```sh
kubectl create deployment [DEPLOYMENT_NAME] --image=[IMAGE_NAME:TAG]
```

### Get deployments

```sh
kubectl get deployments
```

`-l` - search by label

### Get pods

```sh
kubectl get pods
```

### Get pods details

```sh
kubectl describe [NAME]
```

e.g.

```sh
kubectl describe pods
```

```sh
kubectl describe service/[SERVICE_NAME]
```

### Pod logs

```sh
kubectl logs [POD_NAME]
```

### Execute command

```sh
kubectl exec [POD_NAME] [COMMAND]
```

e.g.

```sh
kubectl exec pod-1234 env
```

```sh
kubectl exec -it pod-1234 bash
```

### Expose deployment (create service)

```sh
kubectl expose deployment/[DEPLOYMENT_NAME] --type="NodePort" --port 8080
```

### Delete service

```sh
kubectl delete service [NAME]
```

`-l` - search by label

### Set label

```sh
kubectl label pod [POD_NAME] [LABEL]
```

### Get ReplicaSet

```sh
kubectl get rs
```

### Scale deployment

```sh
kubectl scale deployments/[DEPLOYMENT_NAME] --replicas=[NUMBER]
```

### Update/downgrade application

```sh
kubectl set image deployments/[DEPLOYMENT_NAME] [DEPLOYMENT_NAME]=[IMAGE_NAME:TAG]
```

### Check rollout status

```sh
kubectl rollout status deployments/[DEPLOYMENT_NAME]
```

### Roll back update

```sh
kubectl rollout undo deployments/[DEPLOYMENT_NAME]
```

### Kubernetes dashboard

```bash
minikube dashboard
```

### Kubernetes events

```bash
kubectl get events
```

### Explain field

```bash
kubectl explain [FIELD]
```

### Run container

```bash
kubectl run nodeapp --image=nodeapp --image-pull-policy=Never
```

### Apply config files

```bash
kubectl apply -f [DIRECTORY]
```
