# Kubernetes example

## Requirements

- [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

## Run app

### Start minikube

```bash
minikube start
```

> **Note:** Add `--driver=hyperv` on Windows

### Set docker env

```bash
eval $(minikube docker-env)
```

### Build image

```bash
docker build -t test-app .
```

### Run in minikube

```bash
kubectl run k8s-test --image=test-app --image-pull-policy=Never
```

### Check status

```bash
kubectl get pods
```

## Useful commands

Kubernetes dashboard

```bash
minikube dashboard
```

Kubernetes events

```bash
kubectl get events
```
