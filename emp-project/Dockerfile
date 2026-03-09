FROM eclipse-temurin:21-jdk AS build
WORKDIR /app
COPY . .
RUN chmod +x mvnw && ./mvnw clean package -DskipTests

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/emp-project-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 9090
CMD ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]
