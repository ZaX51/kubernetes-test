# Kubernetes example

## Requirements

- [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

## Run app with minikube

### Start minikube

```bash
minikube start
```

> **Info:** Add `--driver=hyperv` on Windows

### Set docker env

```bash
eval $(minikube docker-env)
```

### Build image

```bash
docker build -t nodeapp .
```

### Run in minikube

```bash
kubectl run nodeapp --image=nodeapp --image-pull-policy=Never
```

### Apply deployment

```bash
kubectl apply -f k8s
```

### Open app in browser

```bash
minikube service nodeapp
```

### Install Helm chart

```bash
helm install nodeapp ./helm
```
