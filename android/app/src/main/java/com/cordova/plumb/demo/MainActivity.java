package com.cordova.plumb.demo;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.plumb5.plugin.plumb5.Plumb5Plugin;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(Plumb5Plugin.class);
  }
}
