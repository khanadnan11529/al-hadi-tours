FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
RUN sed -i 's/\r$//' mvnw && chmod +x mvnw

COPY src/ src/
RUN ./mvnw clean package -DskipTests

EXPOSE 8081

CMD ["sh", "-c", "java -jar target/*.jar --server.port=${PORT:-8081}"]
