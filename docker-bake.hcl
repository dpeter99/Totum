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

target "denarius-server" {
    dockerfile = "./src/denarius/denarius-server/Dockerfile"
    contexts = {
        app = "./src/denarius/denarius-server"
        base = "."
    }
    tags = ["denarius-server:latest", "denarius-server:${GITHUB_SHA}"]
}