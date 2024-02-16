// Import required libraries and modules
import {
    assertEquals,
  } from 'https://deno.land/std@0.192.0/testing/asserts.ts'
  import { createClient, SupabaseClient } from 'https://esm.sh/@supabase/supabase-js@2.23.0'
  import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";
  
  // Set up the configuration for the Supabase client
  const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
  const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  const options = {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  }
  

  
  // Test the 'hello-world' function
  const testDate = async () => {
    const client: SupabaseClient = createClient(supabaseUrl, supabaseKey, options)
    const date = format(new Date(), "yyyy-MM-dd HH:mm:ss")
  
    // Invoke the 'hello-world' function with a parameter
    const { data: func_data, error: func_error } = await client.functions.invoke('date', {
      body: { name: 'bar' },
    })
  
    // Check for errors from the function invocation
    if (func_error) {
      throw new Error('Invalid response: ' + func_error.message)
    }


  
    // Log the response from the function
    console.log(JSON.stringify(func_data, null, 2))
  
    // Assert that the function returned the expected result
    assertEquals(func_data.message, `Hi bar. Today's date is ${date}`)
  }
  
  // Register and run the tests
  Deno.test('Date Function Test', testDate)