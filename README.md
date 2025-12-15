STEPS:

## Simulate code changes
```yml
environment:
  VERSION: v2
```

## Build Image
```bash
docker compose build
```

## Run migration once
```bash
docker compose run --rm migrate
```

## Rollout 
```bash
docker rollout app
```


