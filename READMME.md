minikube start

docker build -t harrys .  
docker tag harrys hrylog/node-jwt-docker-kuber-1:first
docker push hrylog/node-jwt-docker-kuber-1:first  
kubectl apply -f=service.yaml -f=deployment.yaml
kubectl describe pod jwt
kubectl get svc
kubectl logs -f jwt-practice-5846fdbc6d-96fhs
kubectl rollout restart deployment jwt-practice

jwt-practice-588587cfb4-6sb96
jwt-practice-79859666f-mkfzm

minikube service jwt-practice-service
