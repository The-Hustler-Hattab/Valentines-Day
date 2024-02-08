import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TimelineMax, Expo, Elastic,CSSPlugin  } from 'gsap';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.scss']
})
export class PartOneComponent implements OnInit, AfterViewInit{
  @ViewChild('hbdChatbox') hbdChatbox!: ElementRef;
  hideNextStageButton: boolean = true;
  hideStartButton: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { 
    this.hbdChatbox = new ElementRef(null);
  }
  playMusic() { 
    const audio: HTMLAudioElement = new Audio();
    audio.src = 'assets/audio/audio_jazz.ogg'; // Path to your audio file
    audio.play();
  }


  ngAfterViewInit(): void {

  }

  typeWriter(text: string): void {
    const element = this.hbdChatbox.nativeElement;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here
  }





  ngOnInit(): void {

    const plugins = [CSSPlugin]; // Register the CSSPlugin


  }

  // Animation Timeline
  private animationTimeline(): void {
    this.hideStartButton = true;
    // Spit chars that needs to be animated individually
    const textBoxChars: HTMLDivElement = document.getElementsByClassName("hbd-chatbox")[0] as HTMLDivElement;
    const hbd: HTMLDivElement = document.getElementsByClassName("wish-hbd")[0] as HTMLDivElement;
    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg",
    };

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg",
    };

    const tl = new TimelineMax({ paused: true });
  
    tl.to(".container-special", 0.1, {
      visibility: "visible",
    })
      .from(".one", 0.7, {
        opacity: 0,
        y: 10,
      })
      .from(".two", 0.4, {
        opacity: 0,
        y: 10,
      })
      .to(
        ".one",
        0.7,
        {
          opacity: 0,
          y: 10,
        },
        "+=2.5"
      )
      .to(
        ".two",
        0.7,
        {
          opacity: 0,
          y: 10,
        },
        "-=1"
      )
      .from(".three", 0.7, {
        opacity: 0,
        y: 10,
        // scale: 0.7
      })
      .to(
        ".three",
        0.7,
        {
          opacity: 0,
          y: 10,
        },
        "+=2"
      )
      .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
      })
      .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
      })
      .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
        
      },0)    
      .staggerTo(
        ".hbd-chatbox span",
        3.2,
        {
          onStart: () => this.typeWriter("Happy Valentine's Day!! Yeee! Love and blah blah..."),
          visibility: "visible",
        },
        0.5
      )
      .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
      })
      .to(
        ".four",
        0.5,
        {
          scale: 0.2,
          opacity: 0,
          y: -150,
        },
        "+=0.7"
      )
      .from(".idea-1", 0.7, ideaTextTrans)
      .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-2", 0.7, ideaTextTrans)
      .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-3", 0.7, ideaTextTrans)
      .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
      })
      .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
      .from(".idea-4", 0.7, ideaTextTrans)
      .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
      .from(
        ".idea-5",
        0.7,
        {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
        },
        "+=0.5"
      )
      .to(
        ".idea-5 span",
        0.7,
        {
          rotation: 90,
          x: 8,
        },
        "+=0.4"
      )
      .to(
        ".idea-5",
        0.7,
        {
          scale: 0.2,
          opacity: 0,
        },
        "+=2"
      )
      .staggerFrom(
        ".idea-6 span",
        0.8,
        {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: Expo.easeOut,
        },
        0.2
      )
      .staggerTo(
        ".idea-6 span",
        0.8,
        {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
        },
        0.2
      ).add(() => {
        this.playMusic();
      }, "+=1")
      .staggerFromTo(
        ".baloons img",
        2.5,
        {
          opacity: 0.9,
          y: 1400,
        },
        {
          opacity: 1,
          y: -1000,
        },
        0.2
      )
      .from(
        ".girl-dp",
        0.5,
        {
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45,
        },
        "-=2"
      )
      .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
      })
      .staggerFrom(
        ".wish-hbd span",
        0.7,
        {
          opacity: 0,
          y: -50,
          // scale: 0.3,
          rotation: 150,
          skewX: "30deg",
          ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
      )
      .staggerFromTo(
        ".wish-hbd span",
        0.7,
        {
          scale: 1.4,
          rotationY: 150,
        },
        {
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: Expo.easeOut,
        },
        0.1
      )
      .from(
        ".wish h5",
        0.5,
        {
          opacity: 0,
          y: 10,
          skewX: "-15deg",
        },
        "party"
      ).add(() => {
        this.hideNextStageButton = false;
        this.cdr.detectChanges();

      }, "+=1")
      .staggerTo(
        ".eight svg",
        100,
        {
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 3,
          repeatDelay: 1.4,
        },
        0.3
      )

        tl.play();

  }
  startShow(): void {
    this.animationTimeline();
  }
}


