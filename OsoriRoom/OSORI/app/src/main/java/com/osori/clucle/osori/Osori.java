package com.osori.clucle.osori;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class Osori extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_osori);

        WebView OSORIView = (WebView) findViewById(R.id.OSORIView);
        OSORIView.getSettings().setJavaScriptEnabled(true);
        OSORIView.getSettings().setDomStorageEnabled(true);
        OSORIView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        OSORIView.setWebChromeClient(new WebChromeClient());
        OSORIView.loadUrl("http://dude.iptime.org:12112/");
    }
}
