variable "GITHUB_SHA" {
    default = "test"
}


target "workspace" {
    dockerfile = "./apps/backend/Dockerfile"
}


target "denarius-client" {
    dockerfile = "./src/denarius/denarius-client/Dockerfile"
    contexts = {
        app = "./src/denarius/denarius-client"
        base = "."
    }
    tags = ["denarius-client:latest", "denarius-client:${GITHUB_SHA}"]
}