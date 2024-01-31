FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /repo/src/denarius/denarius-server
COPY --from=app denarius-server.csproj .
RUN dotnet restore "denarius-server.csproj"
COPY --from=app . .
RUN dotnet build "denarius-server.csproj" -c $BUILD_CONFIGURATION

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "denarius-server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "denarius-server.dll"]
