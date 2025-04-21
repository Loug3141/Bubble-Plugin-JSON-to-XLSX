function(instance, properties, context) {


  //Load any data 
  console.log(properties.stop_on_error, properties.json_arrays);
  let res = window?.plugin_download_xlsx(properties.json_arrays, properties.stop_on_error) ?? {success:"", error: ""};
   
  instance.publishState('error_message', res?.error ?? "");
  instance.publishState('processed_data_report', res?.success ?? "");
    
  if(res.error != '') {
  	instance.triggerEvent('error');
  }

}