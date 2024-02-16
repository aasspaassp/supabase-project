Prueba técnica para Magtayani. 

Para probar solamente realizar una petición a la edge function que está en producción realizar http POST con el siguiente curl. 

`curl -i --location --request POST 'https://tuuzlithoykyscjaksug.supabase.co/functions/v1/date' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'
`

    
