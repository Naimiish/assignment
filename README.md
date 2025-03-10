🚀 Features  
Responsive Frontend: Clean UI with form validation using HTML/CSS/JavaScript  
RESTful Backend: Flask API handling user data with error management  
MySQL Database: Persistent storage with pre-loaded test data  
Containerized Workflow: Docker images for all components  
Kubernetes Orchestration: Multi-service deployment with load balancing  
Monitoring Suite: Prometheus metrics + Grafana dashboards  



🛠️ Prerequisites  
1. Docker Desktop (with Kubernetes enabled)  
2. kubectl CLI  
3. Python 3.9+   
 

🏗️ Installation  

1. Clone Repository  
git bash  
git clone https://github.com/Naimiish/assignment.git

2. Build Docker Images
For FrontEnd  -cd frontend && docker build -t frontend .
For Backend  -cd Backend && docker build -t Backend .
For Database   -cd Databse && docker build -t Database .

3. Local Testing with Docker Compose
docker-compose up -d  


4. Kubernetes Deployment

kubectl apply -f k8s/database-deployment.yaml
kubectl apply -f k8s/database-service.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml
# Optionally, deploy Ingress if configured:
kubectl apply -f k8s/ingress.yaml


5. Verify Deployments:

kubectl get pods,services --watch  
